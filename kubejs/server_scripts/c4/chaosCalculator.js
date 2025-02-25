// 所有反应物和催化剂
const ALL = [
    ["安山", "闪长", "花岗", "圆石", "玄武", "辉长", "igneous", "火成"],
    ["绯红", "橙色", "黄色", "绿色", "蓝色", "品红", "herbal", "草本"],
    ["烈焰", "史莱", "下界", "黑曜", "火药", "海晶", "volatile", "不稳"],
    ["神秘", "磷灰", "硫磺", "硝石", "赛特斯", "下界石英", "crystal", "晶化"],
    ["锌", "铜", "铁", "镍", "铅", "金", "metal", "金属"],
    ["朱砂", "青金", "蓝宝", "绿宝", "红宝", "钻石", "gem", "宝石"],
    ["火成", "草本", "不稳", "晶化", "金属", "宝石", "chaos", "混沌"],
];

PlayerEvents.chat(event => {
    let inp = event.message;
    if (!inp.startsWith('!')) return;

    if (!event.player.hasPermission("minecraft.command.op")) {
        event.player.tell("Command restricted.");
        event.cancel();
        return;
    }
    
    // 如果 chaos 后面有其他内容，截取作为种子
    if (inp.startsWith('!chaos ')) {
        inp = inp.replace('!chaos ', '');
        // 输入可能是数值，先尝试转换
        let seed = Number(inp);
        if (Number.isNaN(seed))
        {
            // 转换失败就获取字符串哈希值 by java
            seed = inp.hashCode();
            event.player.tell(`seed: "${inp}" = ${seed}`);
        }

        let msg = chaos(seed);
        event.player.tell(msg);
        event.cancel();
        return;
    }

    // 如果只输入了 !chaos，用当前存档的种子进行计算
    if (inp.startsWith('!chaos')) {
        let seed = event.getLevel().getSeed();
        event.player.tell(`seed: ${seed}`);

        let msg = chaos(seed);
        event.player.tell(msg);//global.chaosMappingMessaage);
        event.cancel();
        return;
    }
});

function chaos(seed) {
    // 获取 java 的随机数实例
    const JRandom = Java.loadClass("java.util.Random");
    let random = new JRandom(seed)

    // 表达式：获取一个[0..=5]的随机数
    let next = () => random.nextInt(6);
    let msg = "";

    // 按照 CAB 炼金物品注册顺序和分组顺序随机抽取物品
    for (let c = 0; c < 7; c++) {
        msg += cnNames(
            ("kubejs:substrate_" + ALL[c][6]),
            // 用4个随机下标表示分组中的元素
            [next(), next(), next(), next()]);
        // 根据 CAB 源码中的冗余消费 random 实例
        // for (let t = 2; t < 7; t++) random.nextInt(t);
    }

    // 初始化元素池
    let swap;
    let tmp = [];
    for (let i = 0; i < 38; i++) tmp.push(i);
    // 洗牌：随机打乱下标
    for (let i = 37; i > 0; i--) {
        let j = random.nextInt(i + 1);
        swap = tmp[i];
        tmp[i] = tmp[j];
        tmp[j] = swap;
    }

    // 原文：不能让银和硅互相转换
    if (tmp[0] > 36 && tmp[1] > 36) {
		swap = tmp[2];
		tmp[2] = tmp[1];
		tmp[1] = swap;
    } else {
		for (let i = 2; i < 38; i += 2) {
			if (tmp[i] > 36 && tmp[i + 1] > 36) {
				swap = tmp[i - 1];
				tmp[i - 1] = tmp[i];
				tmp[i] = swap;
				break;
			}
		}
    }

    // 照源码映射洗牌后的元素下标
    let pool = Array(38);
    for (let i = 0; i < 38; i += 2) {
        pool[tmp[i]] = tmp[i + 1];
        pool[tmp[i + 1]] = tmp[i];
    }

    // 最后找出银和硅在映射表中指向什么元素
    msg += `  硅 :: 混沌 ${cnById(pool[36])}\n  银 :: 混沌 ${cnById(pool[37])}\n`;
    return msg;
}

/** 匹配物品名 */
function cnNames(group, ls) {
    const SP = "  ";
    for (let rea of ALL) {
        if (group.endsWith(rea[6])) {
            let s0 = rea[ls[0]];
            let s1 = rea[ls[1]];
            let s2 = rea[ls[2]];
            let s3 = rea[ls[3]];
            return `${rea[7]} :: ${s0} ${s1} ${s2} ${s3}\n`;
        }
    }
}

/** 通过物品 id 找到物品名 */
function cnById(z) {
    let g = Math.floor(z / 6);
    let i = z % 6;
    return (g < 0 || g >= 7 || i < 0 || i >= 6)
        ? '【无】'
        : ALL[g][i];
}
