// screens/VideoChat.js
import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { RtcEngine } from 'agora-rtc-sdk-ng';

const VideoChat = () => {
  const APP_ID = "YOUR_AGORA_APP_ID";
  const CHANNEL_NAME = "test";

  useEffect(() => {
    const init = async () => {
      const engine = await RtcEngine.create(APP_ID);
      await engine.joinChannel(null, CHANNEL_NAME, null, 0);
    };

    init();

    return () => {
      // Clean up and leave the channel
    };
  }, []);

  return (
    <View>
      <Button title="End Call" onPress={() => {/* Leave channel logic */}} />
    </View>
  );
};

export default VideoChat;