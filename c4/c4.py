def create_xmas_tree(height, ornament):
    tree = []
    for i in range(1, height + 1):
        ornaments = ornament * (i * 2 - 1)
        spaces = "_" * (height - i)
        tree.append(spaces + ornaments + spaces)

    trunk = "_" * (height - 1) + "#" + "_" * (height - 1)
    tree.append(trunk)
    tree.append(trunk)
    return "\n".join(tree)
