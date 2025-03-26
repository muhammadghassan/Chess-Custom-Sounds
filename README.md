# Chess.com Custom Sounds
Replaces the default chess.com sounds with custom sounds

## How to Install
1. Install a browser addon for handling usercripts, for example [Tampermonkey](https://www.tampermonkey.net/)
2. Install the script in the repo.

If the installation link doesn't work you can add 'chess-custom-sounds.js' userscript manually in the userscript addon.
## Changing Sounds

### Create MP3 files with the following names:
- move-self.mp3
- move-check.mp3
- move-opponent.mp3
- capture.mp3 
- castle.mp3
- promote.mp3
- notify.mp3
- tenseconds.mp3
- illegal.mp3
- premove.mp3
- game-start.mp3
- game-end.mp3
  
All sound files are optional - if a file isn't found, chess.com will use its default sound


### Host your sound files:
- Create a GitHub repository
- Enable GitHub Pages in repository settings
- Upload your MP3 files to the repository
- Update the BASE_URL in the script to point to your GitHub Pages URL
