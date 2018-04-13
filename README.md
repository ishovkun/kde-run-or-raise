

## Usage
By default plasma-raise-or-run adds one shortcut Meta-~ to toggle konsole.
In order to make plasma-raise-or-run work with your favorite applications and shortcuts,
you need to modify the main.js file. E.g., in order to assign Meta-F shortcut to raise or run
Dolphin, append the following line to the end of the script
'''
registerShortcut("toggle-dolphin", "toggle app dolphin", "Meta+F",
                 function() {run_or_raise("Dolphin")});
'''

If you would like your app to appear on the current desktop, add the toggle argument to the run_or_raise function as follows:
'''
run_or_raise("appname", true);
'''

In case your program is not in the system path, you can add an optional path argument to run_or_raise
'''
run_or_raise("appname", true, "/path/to/executable");
'''

## Install
This should probably work. Haven't tested yet.
'''
plasmapkg -t kwinscript -i .
'''

## Testing
You can test or modify the script in the interactive console
'''
qdbus org.kde.plasmashell /PlasmaShell org.kde.PlasmaShell.showInteractiveConsole
'''
or also from the command line
'''
qdbus org.kde.KWin /Scripting loadScript ~/path/to/main.js; qdbus org.kde.KWin /Scripting start
'''
