

## Usage
By default plasma-raise-or-run registers one command for Konsole.
In order to assign it to a keybinding, one needs to do it in

System Settings - Shortcuts - Global Shortcuts - Kwin - KWin Script: Run or raise konsole

In order to make plasma-raise-or-run work with your favorite applications and shortcuts,
you need to modify the main.js file. E.g., in order to add a shortcut to raise or run Dolphin, append the following line to the end of the script
'''
registerShortcut("toggle-dolphin", "", "",
                 function() {run_or_raise("Dolphin")});
'''
and then activate it in the System Settings.

If you would like your app to appear on the current desktop, add the toggle argument to the run_or_raise function as follows:
'''
run_or_raise("appname", true);
'''

In case your program is not in the system path, you can add an optional path argument to run_or_raise
'''
run_or_raise("appname", true, "/path/to/executable");
'''

## Install
This should probably work when installing from scratch.
'''
kpackagetool6 -t KWin/Script --install .
'''
If you changed your script by adding new programs, run this instead:
'''
kpackagetool6 -t KWin/Script --upgrade .
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

## Debugging 
As in Plasma 6 interactive console printing does not work use to see the output
``` sh
journalctl -g "js:" -f
```
