onEvent("ponder.registry", (event) => {
    event.create("kubejs:guide_computer")
        .tag("kubejs:rocket")
        .scene("kubejs:rocket_1-3", "{kubejs.ponder.rocket_1-3.header}", "kubejs:rocket1-3", (scene) => {
            // 显示地基
            scene.showBasePlate()
            
            // 第一层：火箭引擎
			scene.idleSeconds(1)
            scene.world.showSection([2, 1, 3], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([3, 1, 2], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([1, 1, 2], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([2, 1, 1], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)
            
            //第二层：燃料储罐
            scene.world.showSection([2, 2, 3], Direction.DOWN)
            scene.world.showSection([3, 2, 2], Direction.DOWN)
            scene.world.showSection([2, 2, 2], Direction.DOWN)
            scene.world.showSection([1, 2, 2], Direction.DOWN)
            scene.world.showSection([2, 2, 1], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第三层：火箭引导计算器
            scene.world.showSection([2, 3, 2], Direction.DOWN)
            scene.idle(15)
            scene.world.showSection([2, 3, 1], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.rocket_1-3.text_1}", [2, 3.5, 1])
            scene.idle(15)
            scene.world.showSection([3, 3, 2], Direction.NORTH)
            scene.world.showSection([2, 3, 3], Direction.NORTH)
            scene.world.showSection([1, 3, 2], Direction.NORTH)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第四层：防爆玻璃和外壳
            scene.world.showSection([2, 4, 1], Direction.DOWN)
            scene.idle(15)
            scene.world.showSection([1, 4, 2], Direction.NORTH)
            scene.world.showSection([2, 4, 3], Direction.NORTH)
            scene.world.showSection([3, 4, 2], Direction.NORTH)
            scene.addKeyframe()
            scene.idleSeconds(2)
            
            // 第五层：外壳
            scene.world.showSection([2, 5, 3], Direction.DOWN)
            scene.world.showSection([3, 5, 2], Direction.DOWN)
            scene.world.showSection([1, 5, 2], Direction.DOWN)
            scene.world.showSection([2, 5, 1], Direction.DOWN)
            scene.world.showSection([2, 5, 2], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第六层，第七层：封顶
            scene.world.showSection([2, 6, 2], Direction.UP)
            scene.idle(5)
            scene.world.showSection([2, 7, 2], Direction.UP)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 四角：脚手架       
            scene.world.showSection([3, 5, 3, 3, 1, 3], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([1, 5, 3, 1, 1, 3], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([3, 5, 1, 3, 1, 1], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([1, 5, 1, 1, 1, 1], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.rocket_1-3.text_2}").attachKeyFrame()
            scene.idleSeconds(3)

            
            
            // 二阶火箭替换
            scene.world.hideSection([3, 2, 1, 1, 8, 3], 'up');
            scene.idle(25)
            scene.world.setBlocks([2, 1, 3], "kubejs:encased_desh_engine")
            scene.idle(3)
            scene.world.setBlocks([3, 1, 2], "kubejs:encased_desh_engine")
            scene.idle(3)
            scene.world.setBlocks([1, 1, 2], "kubejs:encased_desh_engine")
            scene.idle(3)
            scene.world.setBlocks([2, 1, 1], "kubejs:encased_desh_engine")
            scene.idle(10)
            scene.world.showSection([3, 2, 1, 1, 2, 3], Direction.DOWN)
            scene.idle(25)
            scene.world.setBlocks([2, 2, 3], "kubejs:encased_desh_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([3, 2, 2], "kubejs:encased_desh_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([2, 2, 2], "kubejs:encased_desh_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([1, 2, 2], "kubejs:encased_desh_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([2, 2, 1], "kubejs:encased_desh_fuel_tank")
            scene.idle(25)
            scene.world.showSection([3, 3, 1, 1, 8, 3], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.rocket_1-3.text_3}").attachKeyFrame()
            scene.idleSeconds(2)

            // 三阶火箭替换
            scene.world.hideSection([3, 2, 1, 1, 8, 3], 'up');
            scene.idle(25)
            scene.world.setBlocks([2, 1, 3], "kubejs:encased_ostrum_engine")
            scene.idle(3)
            scene.world.setBlocks([3, 1, 2], "kubejs:encased_ostrum_engine")
            scene.idle(3)
            scene.world.setBlocks([1, 1, 2], "kubejs:encased_ostrum_engine")
            scene.idle(3)
            scene.world.setBlocks([2, 1, 1], "kubejs:encased_ostrum_engine")
            scene.idle(10)
            scene.world.showSection([3, 2, 1, 1, 2, 3], Direction.DOWN)
            scene.idle(25)
            scene.world.setBlocks([2, 2, 3], "kubejs:encased_ostrum_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([3, 2, 2], "kubejs:encased_ostrum_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([2, 2, 2], "kubejs:encased_ostrum_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([1, 2, 2], "kubejs:encased_ostrum_fuel_tank")
            scene.idle(3)
            scene.world.setBlocks([2, 2, 1], "kubejs:encased_ostrum_fuel_tank")
            scene.idle(25)
            scene.world.showSection([3, 3, 1, 1, 8, 3], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.rocket_1-3.text_4}").attachKeyFrame()
            scene.idleSeconds(4)

            
            //右键提示
            scene.showControls(30, [2, 3.5, 1], "left") // 在右方创建一个向左指的框, 时长为 30 Tick
	                .rightClick() // 在框内显示 鼠标右键 的图示
	                .withWrench() // 在框内显示 机械动力的扳手 的图示
            scene.text(50, "{kubejs.ponder.rocket_1-3.text_5}").attachKeyFrame()
            scene.idleSeconds(2)
            scene.world.setBlocks([0, 9, 0, 4, 1, 4], "minecraft:air")// 坐标, Item飞出去的方向(下面的代码是朝下, 也就是掉落)以及Item Id
            scene.idle(10)
            scene.world.createItemEntity([2.5, 1.5, 2.5], Direction.DOWN, "beyond_earth:rocket_t3")
            scene.text(80, "{kubejs.ponder.rocket_1-3.text_6}").attachKeyFrame()
            


			// 1-3阶火箭场景
        })
        .scene("kubejs:guide_computer_4", "{kubejs.ponder.rocket4.header}", "kubejs:rocket4", (scene) => {
             // 显示地基
        	scene.showBasePlate()
            
            // 第一层：火箭引擎
			scene.idleSeconds(1)
            scene.world.showSection([2, 1, 3], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([3, 1, 2], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([1, 1, 2], Direction.DOWN)
            scene.idle(5)
            scene.world.showSection([2, 1, 1], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)
            
            //第二层：燃料储罐
            scene.world.showSection([2, 2, 3], Direction.DOWN)
            scene.world.showSection([3, 2, 2], Direction.DOWN)
            scene.world.showSection([2, 2, 2], Direction.DOWN)
            scene.world.showSection([1, 2, 2], Direction.DOWN)
            scene.world.showSection([2, 2, 1], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)

            //第三层：燃料储罐
            scene.world.showSection([2, 3, 3], Direction.DOWN)
            scene.world.showSection([3, 3, 2], Direction.DOWN)
            scene.world.showSection([2, 3, 2], Direction.DOWN)
            scene.world.showSection([1, 3, 2], Direction.DOWN)
            scene.world.showSection([2, 3, 1], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第四层：火箭引擎
            scene.world.showSection([2, 4, 2], Direction.DOWN)
            scene.idle(15)
            scene.world.showSection([2, 4, 1], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.guide_computer_4.text_1}", [2, 4.5, 1])
            scene.idle(15)
            scene.world.showSection([3, 4, 2], Direction.NORTH)
            scene.world.showSection([2, 4, 3], Direction.NORTH)
            scene.world.showSection([1, 4, 2], Direction.NORTH)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第五层：防爆玻璃和外壳
            scene.world.showSection([2, 5, 1], Direction.DOWN)
            scene.idle(15)
            scene.world.showSection([1, 5, 2], Direction.NORTH)
            scene.world.showSection([2, 5, 3], Direction.NORTH)
            scene.world.showSection([3, 5, 2], Direction.NORTH)
            scene.addKeyframe()
            scene.idleSeconds(2)
            
            // 第六层：外壳
            scene.world.showSection([2, 6, 3], Direction.DOWN)
            scene.world.showSection([3, 6, 2], Direction.DOWN)
            scene.world.showSection([1, 6, 2], Direction.DOWN)
            scene.world.showSection([2, 6, 1], Direction.DOWN)
            scene.world.showSection([2, 6, 2], Direction.DOWN)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 第七层，第八层：封顶
            scene.world.showSection([2, 7, 2], Direction.UP)
            scene.idle(5)
            scene.world.showSection([2, 8, 2], Direction.UP)
            scene.addKeyframe()
            scene.idleSeconds(2)

            // 四角：脚手架       
            scene.world.showSection([3, 6, 3, 3, 1, 3], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([1, 6, 3, 1, 1, 3], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([3, 6, 1, 3, 1, 1], Direction.DOWN)
            scene.idle(10)
            scene.world.showSection([1, 6, 1, 1, 1, 1], Direction.DOWN)
            scene.text(50, "{kubejs.ponder.guide_computer_4.text_2}").attachKeyFrame()
            scene.idleSeconds(3)

            //右键提示
            scene.showControls(30, [2, 4.5, 1], "left") // 在右方创建一个向左指的框, 时长为 30 Tick
	                .rightClick() // 在框内显示 鼠标右键 的图示
	                .withWrench() // 在框内显示 机械动力的扳手 的图示
            scene.text(50, "{kubejs.ponder.guide_computer_4.text_3}").attachKeyFrame()
            scene.idleSeconds(2)
            scene.world.setBlocks([0, 9, 0, 4, 1, 4], "minecraft:air")// 坐标, Item飞出去的方向(下面的代码是朝下, 也就是掉落)以及Item Id
            scene.idle(10)
            scene.world.createItemEntity([2.5, 1.5, 2.5], Direction.DOWN, "beyond_earth:rocket_t4")
            scene.text(80, "{kubejs.ponder.guide_computer_4.text_4}").attachKeyFrame()
        })


})