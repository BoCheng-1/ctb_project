import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* 页面标题 */}
      <header className="dashboard-header">
        <h1>首页</h1>
      </header>

      {/* 主内容 */}
      <div className="content">
        {/* 推荐曲目 */}
        <section className="recommended">
          <h3>🎶 推荐曲目</h3>
          <ul>
            <li>《夜的第七章》 - 周杰伦</li>
            <li>《晴天》 - 周杰伦</li>
            <li>《红玫瑰》 - 陈奕迅</li>
            <li>《光年之外》 - 邓紫棋</li>
          </ul>
        </section>

        {/* 附近音乐爱好者 */}
        <section className="music-lovers">
          <h3>🎸 附近的音乐爱好者</h3>
          <ul>
            <li>🎤 Alex - 吉他手</li>
            <li>🎹 Lisa - 钢琴爱好者</li>
            <li>🥁 Tom - 鼓手</li>
            <li>🎻 Amy - 小提琴手</li>
          </ul>
          <h3
            onClick={() => navigate("/nearby")}
            className="nearby-link"
          > 
            查看更多附近的音乐爱好者
          </h3>
        </section>
      </div>

      {/* 底部导航栏 */}
      <nav className="navbar">
        <ul>
          <li><a href="#">🏠 推荐</a></li>
          <li><a href="#">🎵 曲库</a></li>
          <li><a href="#">👥 合作</a></li>
          <li><a href="#">📑 学习</a></li>
          <li><a href="#">👤 个人中心</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
