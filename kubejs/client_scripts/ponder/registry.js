onEvent("ponder.registry", (event) => {
    event.create("kubejs:ponder_laser_lamp")
		.tag("kubejs:ponder")
        .scene("alchemy_setup", "混沌炼金","kubejs:laser_alchemy", (scene, util) => {
            scene.showBasePlate()
            scene.idle(20)

            let largeCog = util.select.position(5, 0, 2)
            let deployerSingle = util.select.position(4, 1, 3)
            let smallCog = util.select.position(4, 1, 2)
            let lamp = util.select.fromTo(4, 1, 4, 4, 2, 4)
            let deployer = util.select.fromTo(4, 1, 2, 4, 2, 4)
            let machine = util.select.position(2, 1, 3)
            let light = util.select.position(2, 1, 2)

            scene.world.showSection(machine, Facing.down)
            scene.idle(15)

            scene.overlay.showText(50)
                .text("从殷钢机器开始")
                .pointAt(util.vector.topOf(2, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(60)

            scene.world.showSection(light, Facing.south)
            scene.overlay.showText(50)
                .text("安装任何颜色的镭射灯")
                .pointAt(util.vector.centerOf(2, 1, 2))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(30)

            scene.world.showSection(util.select.position(1, 1, 2), Facing.north)
            scene.idle(25)

            scene.world.toggleRedstonePower(util.select.position(1, 1, 2))
            scene.effects.indicateRedstone(util.grid.at(1, 1, 2))
            scene.world.setBlock(util.grid.at(2, 1, 2), util.getDefaultState("kubejs:ponder_laser_lamp_on"), false)
            scene.idle(15)

            scene.overlay.showText(40)
                .text("确保灯已激活")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.centerOf(2, 1, 2))
                .placeNearTarget()
            scene.idle(50)

            scene.world.setKineticSpeed(deployer, 0)
            scene.world.showSection(deployerSingle, Facing.down)
            scene.idle(15)

            scene.overlay.showText(60)
                .text("放置一个以殷钢机器为目标的机械手")
                .pointAt(util.vector.topOf(4, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(70)
            scene.overlay.showControls(new PonderInput(util.vector.blockSurface(util.grid.at(4, 1, 3), Facing.west), PonderPointing.RIGHT)
                .rightClick().withWrench(),
                50)
            scene.idle(8)
            scene.world.modifyTileNBT(deployerSingle, (nbt) => {
                nbt.Patterns = [
                    {
                        Mode: "PUNCH"
                    }
                ]
            })
            scene.overlay.showText(50)
                .text("使用扳手将其设置为击打模式")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.topOf(4, 1, 3))
                .placeNearTarget()
            scene.idle(20)
            scene.world.showSection(largeCog, Facing.up)
            scene.world.showSection(smallCog, Facing.down)
            scene.idle(5)
            scene.world.showSection(lamp, Facing.down)
            scene.idle(5)
            scene.world.setKineticSpeed(deployer, 64)
            scene.idle(60)
            scene.overlay.showText(50)
                .attachKeyFrame()
                .text("每当机械手激活时...")
                .pointAt(util.vector.topOf(4, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()

            scene.idle(30)
            scene.world.toggleRedstonePower(lamp)
            scene.idle(3)
            scene.world.moveDeployer(util.grid.at(4, 1, 3), 1, 25)
            scene.idle(15)
            scene.idle(10)

            scene.effects.indicateSuccess(util.grid.at(2, 1, 2))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 1))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 0))
            scene.effects.indicateSuccess(util.grid.at(2, 1, -1))

            scene.idle(3)
            scene.world.moveDeployer(util.grid.at(4, 1, 3), -1, 25)
            scene.idle(10)
            scene.world.toggleRedstonePower(lamp)
            // scene.effects.indicateRedstone(util.grid.at(4, 2, 4))

            scene.overlay.showText(50)
                .text("...镭射灯将发出高能光束")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.centerOf(2, 1, 2))
                .placeNearTarget()
            scene.idle(60)

            scene.world.showSection(util.select.fromTo(1, 1, 0, 3, 1, 0), Facing.west)
            scene.idle(5)
            let HopperMinecart = java("net.minecraft.world.entity.vehicle.MinecartHopper")
            let cartHandle = scene.special.createCart(util.vector.topOf(2, 0, 0), 0, (w, x, y, z) => new HopperMinecart(w, x, y, z))
            scene.idle(20)
            scene.overlay.showText(80)
                .attachKeyFrame()
                .text("被光束击中的漏斗矿车将处理其包含的物品")
                .pointAt(util.vector.centerOf(2, 1, 0))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(70)

            scene.overlay.showControls(new PonderInput(util.vector.centerOf(2, 1, 0), PonderPointing.DOWN)
                .withItem("thermal:flux_magnet"),
                40)
            scene.idle(5)
            scene.overlay.showControls(new PonderInput(util.vector.centerOf(2, 1, 0), PonderPointing.UP)
                .withItem("minecraft:basalt"),
                35)
            scene.idle(30)

            scene.world.toggleRedstonePower(lamp)
            scene.idle(3)
            scene.world.moveDeployer(util.grid.at(4, 1, 3), 1, 25)
            scene.idle(15)
            scene.idle(10)

            scene.effects.indicateSuccess(util.grid.at(2, 1, 2))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 1))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 0))
            scene.effects.indicateSuccess(util.grid.at(2, 1, -1))

            scene.idle(3)
            scene.world.moveDeployer(util.grid.at(4, 1, 3), -1, 25)
            scene.idle(10)

            scene.overlay.showControls(new PonderInput(util.vector.centerOf(2, 1, 0), PonderPointing.DOWN)
                .withItem("thermal:flux_magnet"),
                40)
            scene.idle(5)
            scene.overlay.showControls(new PonderInput(util.vector.centerOf(2, 1, 0), PonderPointing.UP)
                .withItem("thermal:basalz_rod"),
                35)

            // scene.effects.indicateRedstone(util.grid.at(4, 2, 4))
            scene.world.toggleRedstonePower(lamp)
        })
})