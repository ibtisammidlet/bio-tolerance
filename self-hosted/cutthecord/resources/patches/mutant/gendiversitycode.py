mutantcolorbase = 0x101600

for oof in range(5, 50):
    character = chr(mutantcolorbase)
    print(f'const-string v1, "{character}"', end="\n\n")
    print(f'const/16 v2, {hex(oof)}', end="\n\n")
    print(f'aput-object v1, v0, v2', end="\n\n")
    mutantcolorbase += 1
