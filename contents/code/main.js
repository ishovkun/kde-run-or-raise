
function run_or_raise(/*string*/ name, /* bool */ toggle, /*string*/ command)
{
    if (typeof(toggle)==='undefined') toggle = true;
    if (typeof(command)==='undefined') command = name;

    // var clients = workspace.clientList();
    // var clients = workspace.stackingOrder;
    var clients = workspace.windowList();
    var found = false;

    for (var i=0; i<clients.length; i++)
    {
        var client = clients[i];
        var title = client.caption;
        var found_string = title.toLowerCase().indexOf(name.toLowerCase());

        if (found_string != -1)
        {
            found = true;
            if (workspace.activeWindow != client)
            {
                if (toggle)
                    client.desktops = workspace.currentDesktop;
                workspace.activeWindow = client;
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
        // > qdbus org.kde.klauncher5 /KLauncher exec_blind "/usr/bin/dolphin" "$HOME"
        // callDBus("org.kde.klauncher5", "/KLauncher", "org.kde.KLauncher","exec_blind", command, []);
        callDBus("org.kde.klauncher5", "/KLauncher", "exec_blind", command,  "" );
    }

}

// to test function
// run_or_raise("konsole", true);

registerShortcut("KWin Script: Run or raise konsole", "", "",
                 function() {run_or_raise("konsole", /*toggle = */ true)});

registerShortcut("KWin Script: Run or raise Dolphin", "", "",
                 function() {run_or_raise("dolphin", /*toggle = */ true)});

//registerShortcut("KWin Script: Run or raise Rambox", "", "",
//                 function() {run_or_raise("rambox", /*toggle = */ true)});
// registerShortcut("KWin Script: Run or raise Ferdi", "", "",
//                  function() {run_or_raise("ferdi", /*toggle = */ true)});
registerShortcut("KWin Script: Run or raise Ferdium", "", "",
                 function() {run_or_raise("ferdium", /*toggle = */ true)});

registerShortcut("toggle-korganizer", "toggle app KOrganizer", "",
                  function() {run_or_raise("KOrganizer")});

registerShortcut("KWin Script: Run or raise second terminal", "", "",
                 function() {run_or_raise("qterminal", /*toggle = */ true)});

registerShortcut("KWin Script: Run or raise Keeweb", "", "",
                 function() {run_or_raise("keeweb", /*toggle = */ true)});

registerShortcut("KWin Script: Run or raise KMail", "", "",
                 function() {run_or_raise("keeweb", /*toggle = */ false)});
