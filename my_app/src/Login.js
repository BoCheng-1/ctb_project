// // src/Login.js
// import React, { useState } from 'react';
// import axios from 'axios'; // 导入 axios
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//       // 发送 POST 请求到后端的登录 API
//       const response = await axios.post('http://localhost:5001/api/login', {
//         username,
//         password,
//       });

//       if (response.data.success) {
//         console.log('登录成功！');
//         // 登录成功后的操作（如跳转到其他页面）
//       } else {
//         setError('用户名或密码错误');
//       }
//     } catch (err) {
//       console.error('登录失败', err);
//       setError('登录失败，请稍后再试');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>登录</h2>
//       <form onSubmit={handleLogin} className="login-form">
//         <div className="input-group">
//           <label htmlFor="username">用户名：</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">密码：</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="login-btn">登录</button>
        
//         {error && <p className="error-message">{error}</p>} {/* 显示错误信息 */}
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "123456") {
//       navigate("/dashboard"); // 跳转到 Dashboard 页面
//     } else {
//       alert("用户名或密码错误");
//     }
//   };

//   return (
//     <div>
//       <h2>一起音乐吧</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="用户名"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="密码"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">登录</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useRef, useState, useEffect } from 'react';

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
      <midi-player
        src={midiFile || "/test.mid"}  // 默认文件路径
        sound-font
        visualizer="#myVisualizer"
      ></midi-player>

      {/* 可视化组件 */}
      <midi-visualizer
        ref={visualizerRef}
        type="piano-roll"
        id="myVisualizer"
      ></midi-visualizer>
    </div>
  );
}

export default MidiPlayer;
