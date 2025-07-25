onEvent("ponder.tag", (event) => {
	event.createTag("kubejs:ponder", "kubejs:abstruse_mechanism", "CAB", "Ponder Index")
	event.createTag(
    "kubejs:rocket", // 你设定的 PonderTag 的 id, 必须小写
    "beyond_earth:rocket_t3", // 你设定的 PonderTag 的图标
    "Rocket", // 你设定的 PonderTag 的名称
    "Build a rocket ,and fly to distant space.", // 你设定的 PonderTag 的介绍
  )

})