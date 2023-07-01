import React, {
  useEffect,
  // eslint-disable-next-line no-unused-vars
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
