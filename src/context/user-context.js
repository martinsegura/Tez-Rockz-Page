import React, { useEffect, useState, useCallback} from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";



const UserContext = React.createContext();
const options = {
  name: 'TezRockz'
 };
  
const wallet = new BeaconWallet(options);

export const useUserContext = () => {

  const app = React.useContext(UserContext);
  if (!app) {
    throw new Error(
      `!app`
    );
  }
  return app;
};

export const UserContextProvider = ({ children }) => {
  
  const [app, setApp] = React.useState("");
  const [address, setAddress] = useState("");
  const [tezos, setTezos] = useState(new TezosToolkit("https://mainnet.api.tez.ie"));
  const [activeAccount, setActiveAccount] = useState("")


  useEffect( () => {
     const getLoggedIn = async () => {
        if (await wallet?.client?.getActiveAccount()) { 
          setActiveAccount(await wallet?.client?.getActiveAccount());
          const address =  await wallet.getPKH();
          setAddress(address);
          tezos.setWalletProvider(wallet);
          setTezos(tezos)
        }
      };
      getLoggedIn();
    }, []);
  
  async function logIn() {
    app.currentUser && await app.currentUser?.logOut();
    await wallet.client.clearActiveAccount();
    await wallet.client.requestPermissions({
      network: {
        type: 'mainnet',
      },
    });
    tezos.setWalletProvider(wallet);
    setTezos(tezos)
    setAddress(await wallet.getPKH());
    setActiveAccount(await wallet?.client?.getActiveAccount());

  }

  async function logOut() {
    await wallet.client.clearActiveAccount();
    setActiveAccount("")
    setAddress("");
    //  window.location.reload();
  }

  const wrapped = { ...app, tezos, logIn, logOut, activeAccount, address};

  return (
   
    <UserContext.Provider value={wrapped}>
           {children}
    </UserContext.Provider>
  
  );
};

export default UserContextProvider;