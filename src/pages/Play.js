import { useUserContext } from "../context/user-context";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/tezRockz.loader.js",
  dataUrl: "build/tezRockz.data",
  frameworkUrl: "build/tezRockz.framework.js",
  codeUrl: "build/tezRockz.wasm",
});


export const Play = () => {

    //Problema actual: Cuando cambio a otra pagina como About, el framework de..
    //.. unity hace un quitting y crashea la pagina. 
    const app = useUserContext();


    setInterval(UpdateUnityWalletAddress,4000)//call UpdateUnityWalletAddress every 10 seconds- !temporally solution!
    function UpdateUnityWalletAddress() {
      if(app.activeAccount ) unityContext.send("WalletLoader", "GetWallet", app.address)
    }

    return (
      <>
       <div id="layout">
               <div id= "unity" className="unity-container">
             <Unity unityContext={unityContext} className={"game-canvas"} />  
              </div> 

              <div id="about-container">
                <section id="section-intro">
                  <h2>TezRockz</h2>
                  <p>
                    TezRocks is a chill NFT game about collecting rocks and stacking them.{" "}
                    <br />
                    The rocks are traded on OBJKT.com in the Tezos blockchain. <br />
                    <br />
                    <b> -Game in development- </b>
                  </p>
                </section>
                <section id="section-howtoplay">
                  <h2>How to play?</h2>
                  <ul>
                    <li>
                      1.Collect rocks on 
                      <a
                        target="blank"
                        href="https://objkt.com/collection/KT1NtnfBS4zDrxMpJzt6wVGpEBooLM6SXwhT"
                      >
                       OBJKT
                      </a>
                    </li>
                    <li>2.Sync your wallet(blue botton)</li>
                    <li>
                      3.Go to <a href="#unity">Play</a> and enjoy!
                    </li>
                  </ul>
                </section>
                <section id="section-blog">
                  <h2> Planned Features (Roadmap long term)</h2>
                  <ul>
                    <li>
                      <s>
                        Sync Wallet integration (Thanks
                        <a target="blank" href="https://twitter.com/tezosmiami">
                          @TezosMiami
                        </a>
                        for the help!)
                      </s>
                    </li>
                    <li>Global high score(heigth) leaderboard</li>
                    <li>More type of rocks</li>
                    <li>Displaying rockz you own in-game in a special room with shelves</li>
                    <li>Displaying cards you own in-game</li>
                    <li>
                      Rockz with special powers like gravity-pull, floating rockz, and
                      others
                    </li>
                  </ul>
                </section>
                <section id="section-credits">
                  <h2>Team TezRockz</h2>
                  <ul>
                    <li>
                      <a target="blank" href="https://twitter.com/srezu_tz">
                        @srezu
                      </a>
                    </li>
                    <li>
                      <a target="blank" href="https://twitter.com/ToronjaGB">
                        @ToronjaGB
                      </a>
                    </li>
                    <li>
                      <a target="blank" href="https://twitter.com/2box_tz">
                        @2box_tz
                      </a>
                    </li>
                  </ul>
                </section>
                <section id="section-socialmedia">
                  <a
                    className="link-socialmedia"
                    id="link-twitter"
                    target="blank"
                    href="https://twitter.com/tezrockz"
                  />
                  <a
                    className="link-socialmedia"
                    id="link-discord"
                    target="blank"
                    href="https://discord.gg/ep3kVTAD"
                  />
                </section>
              </div>
        </div>
      </>
    );
  }
  

