import style from '../TeamSvg/TeamSvg.module.scss'

function TeamSvg (){
    return (
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="b" gradientTransform="matrix(2 0 0 2 -.51 -.5)">
            <stop offset="8%" stopColor="#fdfffa" />
            <stop offset="22.5%" stopColor="#fdfffa" />
            <stop offset="37%" stopColor="#d6ecd2" />
            <stop offset="66%" stopColor="#d6ecd2" />
            <stop offset="100%" stopColor="#d6ecd2" />
          </radialGradient>
        </defs>
        <rect height="30" width="30" fill="url(#b)" rx="2"/>
      </svg>
    );
}

export default TeamSvg