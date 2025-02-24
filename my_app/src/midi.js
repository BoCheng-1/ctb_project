// import React, { useEffect } from "react";
// import MidiPlayer from "midi-player-js";

// const MidiPlayerComponent = () => {
//   useEffect(() => {
//     // 创建 Player 实例
//     const player = new MidiPlayer.Player((event) => {
//       console.log("MIDI 事件:", event);
//     });

//     // 获取 MIDI 文件
//     fetch("/test.mid")
//       .then((response) => response.arrayBuffer()) // 转换为 ArrayBuffer
//       .then((buffer) => {
//         player.loadArrayBuffer(buffer); // 加载 MIDI 数据
//         player.play(); // 播放 MIDI
//       })
//       .catch((error) => console.error("加载 MIDI 文件失败:", error));

//     return () => {
//       player.stop(); // 组件卸载时停止播放
//     };
//   }, []);

//   return <div>正在播放 MIDI...</div>;
// };

// export default MidiPlayerComponent;

// 

import React, { useRef, useState, useEffect } from 'react';
import './midi.css';  // 确保路径正确

function MidiPlayer() {
  const visualizerRef = useRef(null);
  const [midiFile, setMidiFile] = useState(null);

  // 处理文件选择
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setMidiFile(url);  // 设置 MIDI 文件的 URL
    }
  };

  useEffect(() => {
    // 如果 midiFile 已经更新，确保播放器和可视化组件更新
    if (midiFile) {
      const player = document.querySelector("midi-player");
      const visualizer = document.querySelector("midi-visualizer");

      if (player && visualizer) {
        player.src = midiFile;  // 更新 MIDI 文件的 URL
        visualizer.src = midiFile;
      }
    }
  }, [midiFile]);

  return (
    <div className="container">
      <h1>React MIDI Player</h1>
      
      {/* 文件上传控件 */}
      <div className="file-input">
        <label>
          Load MIDI file: 
          <input 
            type="file" 
            accept=".mid" 
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* MIDI 播放器组件 */}
      {/* <midi-player
        src={midiFile || "/test.mid"}  // 默认文件路径
        sound-font
        visualizer="#myVisualizer"
      ></midi-player> */}

      {/* 可视化组件 */}
      {/* <midi-visualizer
        ref={visualizerRef}
        type="piano-roll"
        id="myVisualizer"
      ></midi-visualizer> */}
        <div className="midi-player-wrapper">
        <midi-player
            src={midiFile || "/test.mid"}
            sound-font
            visualizer="#myVisualizer"
        ></midi-player>
        </div>

        <div className="midi-visualizer-wrapper">
        <midi-visualizer
            ref={visualizerRef}
            type="piano-roll"
            id="myVisualizer"
        ></midi-visualizer>
        </div>


    </div>
  );
}

export default MidiPlayer;
