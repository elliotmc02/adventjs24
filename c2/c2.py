def createFrame(names):
    maxLength = len(max(names, key=len))
    width = maxLength + 4
    frame = ["*" * width]
    for name in names:
        frame.append(f"* {name.ljust(maxLength)} *")
    frame.append("*" * width)
    return "\n".join(frame)
