fw = dict((chr(i), chr(i + 0xFEE0)) for i in range(0x21, 0x7F))

code = """
    const-string v0, "before"

    const-string v1, "after"

    invoke-virtual {p0, v0, v1}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0"""

for entry in fw:
    if entry in ["\\", "\""]:
        continue
    print(code.replace("before", entry).replace("after", fw[entry]))
