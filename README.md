

You can test or modify the script in the interactive console
'''
qdbus org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.showInteractiveConsole
'''
or also from the command line
'''
qdbus org.kde.KWin /Scripting loadScript ~/path/to/main.js; qdbus org.kde.KWin /Scripting start
'''
