
function run_or_raise(/*string*/ name, /* bool */ toggle, /*string*/ command)
{
    if (typeof(toggle)==='undefined') toggle = true;
    if (typeof(command)==='undefined') command = name;

    var clients = workspace.clientList();
    var found = false;

    for (var i=0; i<clients.length; i++)
    {
        var client = clients[i];
        var title = client.caption;
        var found_string = title.toLowerCase().indexOf(name.toLowerCase());

        if (found_string != -1)
        {
            found = true;
            // print(title);
            if (workspace.activeClient != client)
            {
                if (toggle)
                    client.desktop = workspace.currentDesktop;
                workspace.activeClient = client;
            }
            else
            {
                client.minimized = true;
            }

            break;
        }
    } // end client loop

    if (found == false)
    {
        // this works from shell
        // qdbus org.kde.klauncher5 /KLauncher org.kde.KLauncher.exec_blind konsole 2
        callDBus("org.kde.klauncher5", "/KLauncher", "org.kde.KLauncher","exec_blind", command, []);

        // also can query the name in krunner
        // qdbus org.kde.plasma-desktop /MainApplication loadScriptInInteractiveConsole /path/to/file
        // callDBus("org.kde.krunner","/App","org.kde.krunner.App","query",name);

    }

}

// to test function
// run_or_raise("konsole", true);

registerShortcut("KWin Script: Run or raise konsole", "", "",
                 function() {run_or_raise("konsole", /*toggle = */ true)});

// registerShortcut("KWin Script: Run or raise Dolphin", "", "",
//                  function() {run_or_raise("dolphin", /*toggle = */ true)});

// registerShortcut("toggle-korganizer", "toggle app KOrganizer", "Meta+C",
//                  function() {run_or_raise("KOrganizer")});
