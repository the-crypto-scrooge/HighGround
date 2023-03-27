UnityWebRequest loaded = UnityWebRequest.Get(url);
loaded.downloadHandler = new DownloadHandlerBuffer();
loaded.SetRequestHeader("Content-Type", "application/json");
loaded.SetRequestHeader("Accept", "application/json");
loaded.SetRequestHeader("Access-Control-Allow-Origin", "*");
loaded.SetRequestHeader("Access-Control-Allow-Methods", "GET");
loaded.SetRequestHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

yield return loaded.SendWebRequest();

requiredTokenAmount = loaded.downloadHandler.text;
PlayerPrefs.SetString("RequiredTokenAmounts", requiredTokenAmount);

Debug.Log(PlayerPrefs.GetString("RequiredTokenAmounts"));

GetETHPrice();
