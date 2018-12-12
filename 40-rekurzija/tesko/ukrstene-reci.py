# https://www.hackerrank.com/challenges/crossword-puzzle/

def print_board(board):
    for row in board:
        print(''.join(row))


def get_possible_locations(board, word):
    poss_locs = []
    length = len(word)
    # horizontal possible location
    for i in range(10):
        for j in range(10 - length + 1):
            good = True
            for k in range(len(word)):
                if board[i][j + k] not in ['-', word[k]]:
                    good = False
                    break
            if good:
                yield (i, j, 0)  # 0 is axis indicator
    # vertical possible location
    for i in range(10 - length + 1):
        for j in range(10):
            good = True
            for k in range(len(word)):
                if board[i + k][j] not in ['-', word[k]]:
                    good = False
                    break
            if good:
                yield (i, j, 1)  # 1 is axis indicator


def revert_move(board, word, loc):
    i, j, axis = loc
    if axis == 0:  # axis 0 is horizontal
        for k in range(len(word)):
            board[i][j + k] = '-'
    else:  # axis 1 is vertical
        for k in range(len(word)):
            board[i + k][j] = '-'


# write the word on board at specified loc
def move(board, word, loc):
    i, j, axis = loc
    if axis == 0:
        for k in range(len(word)):
            board[i][j + k] = word[k]
    else:
        for k in range(len(word)):
            board[i + k][j] = word[k]


def solve(board, words):
    solved = False

    if len(words) == 0:
        if not solved:
            print_board(board)
        solved = True
        return

    word = words.pop()
    pos_locs = [loc for loc in get_possible_locations(board, word)]

    for loc in pos_locs:
        move(board, word, loc)
        solve(board, words)
        revert_move(board, word, loc)

    words.append(word)


board1 = [
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '-', '-', '-', '-', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '-', '-', '-', '-', '-', '-', '+', '+'],
    ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+']
]
words1 = ['LONDON', 'DELHI', 'ICELAND', 'ANKARA']

board2 = [
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '-', '-', '-', '-', '-', '-', '+', '+'],
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
    ['+', '-', '-', '-', '-', '-', '-', '+', '+', '+'],
    ['+', '-', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
    ['+', '+', '+', '+', '+', '+', '+', '+', '+', '+']
]
words2 = ['AGRA', 'NORWAY', 'ENGLAND', 'GWALIOR']

board3 = [
    ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X'],
    ['X', 'X', '-', '-', '-', '-', '-', '-', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X'],
    ['X', 'X', 'X', '-', '-', '-', '-', '-', '-', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', '-', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', '-', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '-', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '-', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '-', 'X']
]
words3 = ['ICELAND', 'MEXICO', 'PANAMA', 'ALMATY']

solve(board1, words1)
print()
solve(board2, words2)
print()
solve(board3, words3)
