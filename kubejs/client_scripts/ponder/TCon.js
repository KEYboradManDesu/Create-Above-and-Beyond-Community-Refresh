onEvent("ponder.registry", (event) => {
	event.create("tconstruct:smeltery_controller")
		.tag("kubejs:ponder")
		.scene("kubejs:smeltery", "冶炼炉", "kubejs:smeltery", (scene) => {
			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.7)
			// 显示炉子底部
			scene.world.showSection([5, 1, 3, 3, 1, 5], Direction.DOWN)
			scene.idle(20)
			scene.text(60, "§b底部由最大为11x11的\n§b矩形焦黑砖块构成", [3, 3, 3])
			scene.overlay.showOutline("green", {}, [5, 1, 3, 3, 1, 5], 60)
			scene.idle(60)
			// 显示三个部件
			scene.world.showSection([5, 2, 2, 3, 2, 2], Direction.SOUTH)
			// attachKeyFrame表示直接在文字处创建关键帧
			scene.text(35, "第二层任意方向我们依次放上\n§b燃料储罐\n§b冶炼炉控制器\n§b排液口")
				.attachKeyFrame()
			scene.idle(30)
			scene.overlay.showOutline("blue", {}, [5, 2, 2], 30)
			scene.text(20, "§b焦黑储罐", [4, 4.5, 0])
				.placeNearTarget()
			scene.idle(30)
			scene.overlay.showOutline("blue", {}, [4, 2, 2], 30)
			scene.text(20, "§b冶炼炉控制器", [3, 4.5, 0])
				.placeNearTarget()
			scene.idle(30)
			scene.overlay.showOutline("blue", {}, [3, 2, 2], 30)
			scene.text(20, "§b焦黑排液口", [2, 4.5, 0])
				.placeNearTarget()
			scene.idle(40)

			scene.text(30, "§b剩余的面用焦黑砖块补上\n§b同时将浇筑口也放到排液口前")
				.attachKeyFrame()
			// 显示各砖块
			let bricks = [
				[2, 2, 3], [2, 2, 4], [2, 2, 5],
				[3, 2, 6], [4, 2, 6], [5, 2, 6],
				[6, 2, 5], [6, 2, 4], [6, 2, 3]
			]
			for (let block of bricks) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idle(20)

			// 显示浇筑口等
			scene.world.showSection([2, 2, 2], Direction.EAST)
			scene.world.showSection([3, 2, 1], Direction.SOUTH)
			scene.idle(10)
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.world.showSection([3, 1, 1], Direction.DOWN)
			scene.idle(40)

			//加高
			scene.text(30, "§b此外,我们也可以用砖块继续搭高")
				.attachKeyFrame()
			// 显示各砖块
			let brick_1 = [
				[2, 3, 3], [2, 3, 4], [2, 3, 5],
				[3, 3, 6], [4, 3, 6], [5, 3, 6],
				[6, 3, 5], [6, 3, 4], [6, 3, 3],
				[5, 3, 2], [4, 3, 2], [3, 3, 2],

				[2, 4, 3], [2, 4, 4], [2, 4, 5],
				[3, 4, 6], [4, 4, 6], [5, 4, 6],
				[6, 4, 5], [6, 4, 4], [6, 4, 3],
				[5, 4, 2], [4, 4, 2], [3, 4, 2],

				[2, 5, 3], [2, 5, 4], [2, 5, 5],
				[3, 5, 6], [4, 5, 6], [5, 5, 6],
				[6, 5, 5], [6, 5, 4], [6, 5, 3],
				[5, 5, 2], [4, 5, 2], [3, 5, 2],

				[2, 6, 3], [2, 6, 4], [2, 6, 5],
				[3, 6, 6], [4, 6, 6], [5, 6, 6],
				[6, 6, 5], [6, 6, 4], [6, 6, 3],
				[5, 6, 2], [4, 6, 2], [3, 6, 2],

				[2, 7, 3], [2, 7, 4], [2, 7, 5],
				[3, 7, 6], [4, 7, 6], [5, 7, 6],
				[6, 7, 5], [6, 7, 4], [6, 7, 3],
				[5, 7, 2], [4, 7, 2], [3, 7, 2],

				[2, 8, 3], [2, 8, 4], [2, 8, 5],
				[3, 8, 6], [4, 8, 6], [5, 8, 6],
				[6, 8, 5], [6, 8, 4], [6, 8, 3],
				[5, 8, 2], [4, 8, 2], [3, 8, 2],

				[2, 9, 3], [2, 9, 4], [2, 9, 5],
				[3, 9, 6], [4, 9, 6], [5, 9, 6],
				[6, 9, 5], [6, 9, 4], [6, 9, 3],
				[5, 9, 2], [4, 9, 2], [3, 9, 2]
			]
			for (let block of brick_1) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(1)
			}
			scene.idle(20)
			// 提示
			scene.addKeyframe()
			scene.overlay.showOutline("red", {}, [5, 2, 2], 60)
			scene.text(40, "§c记得给储罐加上燃料哦", [4, 4.5, 0])
				.placeNearTarget()
			scene.idle(60)
		})

	event.create("tconstruct:foundry_controller")
		.tag("kubejs:ponder")
		.scene("kubejs:scorched", "熔铸炉", "kubejs:scorched", (scene) => {
			// 显示场景底盘
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.7)
			// 显示底部
			scene.world.showSection([6, 1, 2, 2, 1, 6], Direction.DOWN)
			scene.idle(20)
			scene.text(50, "§b底部由最大为16x16的\n§b矩形焦褐砖块构成", [3, 3, 3])
			scene.overlay.showOutline("red", {}, [6, 1, 2, 2, 1, 6], 60)
			scene.idle(60)
			// 显示三部件
			scene.world.showSection([4, 2, 2, 2, 2, 2], Direction.DOWN)
			scene.text(35, "第二层任意方向我们依次放上\n§b熔铸炉控制器\n§b燃料储罐\n§b焦褐排液口")
				.attachKeyFrame()
			scene.idle(30)
			// 控制器
			scene.overlay.showOutline("red", {}, [4, 2, 2], 30)
			scene.text(20, "§b熔铸炉控制器", [4.5, 2.5, 2])
				.placeNearTarget()
			scene.idle(30)
			// 燃料储罐
			scene.overlay.showOutline("red", {}, [3, 2, 2], 30)
			scene.text(20, "§b燃料储罐", [3.5, 2.5, 2])
				.placeNearTarget()
			scene.idle(30)
			// 排液口
			scene.overlay.showOutline("red", {}, [2, 2, 2], 30)
			scene.text(20, "§b焦褐排液口", [2.5, 2.5, 2])
				.placeNearTarget()
			scene.idle(30)

			scene.text(30, "§b剩余的面我们用焦褐砖块补上\n§b同时将浇筑口也放到排液口前")
				.attachKeyFrame()

			// 显示各砖块
			let bricks_1 = [
				[2, 2, 3], [2, 2, 4], [2, 2, 5], [2, 2, 6],
				[3, 2, 6], [4, 2, 6], [5, 2, 6], [6, 2, 6],
				[6, 2, 5], [6, 2, 4], [6, 2, 3], [6, 2, 2], [5, 2, 2]
			]
			for (let block of bricks_1) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idle(20)
			// 浇筑口和工作方块
			scene.addKeyframe()
			scene.world.showSection([1, 2, 2], Direction.EAST)
			scene.world.showSection([2, 2, 1], Direction.SOUTH)
			scene.idle(10)
			scene.world.showSection([1, 1, 2], Direction.DOWN)
			scene.world.showSection([2, 1, 1], Direction.DOWN)
			scene.idle(40)
			// 增高
			scene.text(30, "§b此外,我们也可以用砖块继续搭高")
				.attachKeyFrame()
			// 显示各砖块
			let brick_1 = [
				[6, 3, 2], [5, 3, 2], [4, 3, 2], [3, 3, 2], [2, 3, 2],
				[2, 3, 3], [2, 3, 4], [2, 3, 5], [2, 3, 6],
				[3, 3, 6], [4, 3, 6], [5, 3, 6], [6, 3, 6],
				[6, 3, 5], [6, 3, 4], [6, 3, 3],

				[6, 4, 2], [5, 4, 2], [4, 4, 2], [3, 4, 2], [2, 4, 2],
				[2, 4, 3], [2, 4, 4], [2, 4, 5], [2, 4, 6],
				[3, 4, 6], [4, 4, 6], [5, 4, 6], [6, 4, 6],
				[6, 4, 5], [6, 4, 4], [6, 4, 3],

				[6, 5, 2], [5, 5, 2], [4, 5, 2], [3, 5, 2], [2, 5, 2],
				[2, 5, 3], [2, 5, 4], [2, 5, 5], [2, 5, 6],
				[3, 5, 6], [4, 5, 6], [5, 5, 6], [6, 5, 6],
				[6, 5, 5], [6, 5, 4], [6, 5, 3],

				[6, 6, 2], [5, 6, 2], [4, 6, 2], [3, 6, 2], [2, 6, 2],
				[2, 6, 3], [2, 6, 4], [2, 6, 5], [2, 6, 6],
				[3, 6, 6], [4, 6, 6], [5, 6, 6], [6, 6, 6],
				[6, 6, 5], [6, 6, 4], [6, 6, 3],

				[6, 7, 2], [5, 7, 2], [4, 7, 2], [3, 7, 2], [2, 7, 2],
				[2, 7, 3], [2, 7, 4], [2, 7, 5], [2, 7, 6],
				[3, 7, 6], [4, 7, 6], [5, 7, 6], [6, 7, 6],
				[6, 7, 5], [6, 7, 4], [6, 7, 3],

				[6, 8, 2], [5, 8, 2], [4, 8, 2], [3, 8, 2], [2, 8, 2],
				[2, 8, 3], [2, 8, 4], [2, 8, 5], [2, 8, 6],
				[3, 8, 6], [4, 8, 6], [5, 8, 6], [6, 8, 6],
				[6, 8, 5], [6, 8, 4], [6, 8, 3],

				[6, 9, 2], [5, 9, 2], [4, 9, 2], [3, 9, 2], [2, 9, 2],
				[2, 9, 3], [2, 9, 4], [2, 9, 5], [2, 9, 6],
				[3, 9, 6], [4, 9, 6], [5, 9, 6], [6, 9, 6],
				[6, 9, 5], [6, 9, 4], [6, 9, 3]
			]
			for (let block of brick_1) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(1)
			}
			scene.idle(20)

			scene.addKeyframe()
			scene.overlay.showOutline("red", {}, [3, 2, 2], 60)
			scene.text(40, "§b最后记得给燃料储罐导入燃料哦", [3.5, 2.5, 2])
				.placeNearTarget()
			scene.idle(20)
		})
})