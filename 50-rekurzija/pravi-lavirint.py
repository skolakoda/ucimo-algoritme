# https://stackoverflow.com/questions/27017164/python-maze-generator-explanation
from random import shuffle, randrange

def make_maze(w = 16, h = 8):
    # create grid
    ver = [["|  "] * w + ['|'] for x in range(h)] + [[]]
    hor = [["+--"] * w + ['+'] for x in range(h + 1)]
    # init empty array
    visited = [[0] * w + [1] for x in range(h)] + [[1] * (w + 1)]

    # walks around the maze, removing the walls to build a path
    def walk(x, y):
        visited[y][x] = 1
        # initializes an array with all four neighbors of the current cell
        d = [(x - 1, y), (x, y + 1), (x + 1, y), (x, y - 1)]
        # neighbors are visited in a random order (thanks to shuffle(d))
        shuffle(d)
        for (xx, yy) in d:
            if visited[yy][xx]: continue
            # remove horizontal wall, "+--" turns into "+  "
            if xx == x: hor[max(y, yy)][x] = "+  "
            # remove vertical wall, "|"   turns into "   "
            if yy == y: ver[y][max(x, xx)] = "   "
            walk(xx, yy)

    # start walk in a random location within the maze
    walk(randrange(w), randrange(h))
    # print the maze
    for (a, b) in zip(hor, ver):
        print(''.join(a + ['\n'] + b))

make_maze()
