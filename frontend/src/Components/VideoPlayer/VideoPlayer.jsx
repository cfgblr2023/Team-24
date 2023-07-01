import React, {
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

import "./VideoPlayer.css"

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      Uid: {user.uid}
      <div
        ref={ref}
        className="video-feed"
      ></div>
    </div>
  );
};
