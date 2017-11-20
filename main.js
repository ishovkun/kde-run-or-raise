// run with
// qdbus org.kde.KWin /Scripting loadScript ~/dev/raiserun/main.js; qdbus org.kde.KWin /Scripting start
console.log("cacas");
var clients = workspace.clientList();
print("cacas");
for (var i=0; i<clients.length; i++) {
  var client = clients[i];
  var title = client.caption;
  var found = title.toLowerCase().indexOf("konsole");
  //print(title);
  if (found != -1)
  {
    // print(title);
    if (workspace.activeClient != client)
    {
      client.desktop = workspace.currentDesktop;
      workspace.activeClient = client;

    }
    else
    {
      client.minimized = true;
    }

    break;
  }
}

