import Sound from "react-sound";
import KokiriForest from "../assets/audio/kokiriforest.mp3";
import RitoVillage from "../assets/audio/ritovillage.mp3";
import NightmareFuel from "../assets/audio/guardianbattle.mp3";
import SongofStorms from "../assets/audio/songofstorms.mp3";
import MainTheme from "../assets/audio/maintheme.mp3";
import KassTheme from "../assets/audio/kasstheme.mp3";
import GrooseTheme from "../assets/audio/groosetheme.mp3";
import GoddessBallad from "../assets/audio/balladofthegoddess.mp3";
import Skyloft from "../assets/audio/skyloft.mp3";



const PlaySound = (
    {handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying, currentSong, setSong, isPlaying, setIsPlaying, isLooped, setLoop}
) => {

    //array to store a simple playlist full of the songs
    const playlist = [  KokiriForest, RitoVillage, NightmareFuel, SongofStorms, MainTheme, KassTheme, GrooseTheme, GoddessBallad, Skyloft];

    //function to change icons when the play button is clicked
    const handleClickPlay = () => {
        let iClass = [" fas fa-solid fa-play", "play-btn"];
        if(!isPlaying){
            return iClass;
        }else{
            iClass = [" fas fa-solid fa-stop", "stop-btn"];
            return iClass;
        }
    }

    const handleClickLoop = () => {
        let iClass = ["fas fa-undo", "loop-btn"];
        if(!isLooped){
            return iClass;
        }else{
            iClass = ["fas fa-ban", "stop-loop-btn"];
            return iClass;
        }
    }

    return (
        <div className="sound-player">

            <button className= {handleClickLoop(!isLooped)[1]} onClick={() => setLoop(!isLooped)} > 
                <i className= {handleClickLoop(!isLooped)[0]}></i>
            </button>

            <button className= {handleClickPlay(!isPlaying)[1]} onClick={() => setIsPlaying(!isPlaying)} > 
                <i className= {handleClickPlay(!isPlaying)[0]}></i>
            </button>
            
            <Sound 
                url={currentSong}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
                }
                loop={isLooped}
                volume = {20}
                onloading={handleSongLoading}
                onPlaying= {handleSongPlaying}
                onFinishedPlaying = {handleSongFinishedPlaying}
      
            />
            <button className= "shuffle-btn" onClick={() => setSong(playlist[Math.floor(Math.random()*playlist.length)])}>
                <i class="fas fa-solid fa-random"></i>
                </button>
        </div>
    )
}

export default PlaySound;