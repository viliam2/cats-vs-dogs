player.onChat("run", function () {
    blocks.place(GRASS, pos(0, 0, 0))
})
blocks.fill(
GRASS,
pos(0, 0, 0),
pos(1000, 1000, 1000),
FillOperation.Replace
)
blocks.place(GRASS, pos(0, 0, 0))
