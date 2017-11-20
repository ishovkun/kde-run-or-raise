// console.log(arguments[0]);
//print(config.exists);
//importExtension(process);

function raise(name)
{
  //dvar name = "konsole";
  var clients = workspace.clientList();
  for (var i=0; i<clients.length; i++)
  {
    var client = clients[i];
    var title = client.caption;
    var found = title.toLowerCase().indexOf(name.toLowerCase());
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
}
// raise("Spotify");
/*registerShortcut("toggle konsole", "toggle app konsole", "Meta+~",
                 function() {raise("konsole")});
registerShortcut("toggle-pidgin", "toggle app spotify", "Meta+E",
                 function() {raise("spotify")});
registerShortcut("toggle-dolphin", "toggle app dolphin", "Meta+F",
                 function() {raise("Dolphin")});
*/
