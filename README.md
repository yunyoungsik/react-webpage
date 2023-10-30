# 리액트를 이용한 웹 사이트 만들기
리액트 사이트 제작

## 설치
1. Github에서 New repository를 생성 후 Clone폴더를 생성함
2. 터미널에서 npx create-react-app react-webpage(터미널에서 cd [경로]로 설치하는 폴더까지 이동하여 설치할 경우 npx create-react-app .)

## 디자인
디자인은 웹상에 공유되어 있는 디자인으로 작업하였습니다. [피그마 디자인](https://www.figma.com/file/OJQy83tbMpYRMV2rLjg2fL/%EA%B0%9C%EC%9D%B8%EC%9E%91%EC%97%85?type=design&node-id=91%3A245&mode=design&t=ZgRkSeoRKjF6rmp3-1)

## 작업 순서
- 필요없는 파일 삭제
(public index.html / src App.js, index.js 제외 삭제)
- rafce : 기본 문법 나오기 --> 확장 프로그램 ES7 설치
- npm start : 리액트 시작
- App.jsx에 'Header', 'Main', 'Footer'로 나누어 작업
- 'src / components'에 'Header.jsx', 'Main.jsx', 'Footer.jsx'파일을 생성
- App.jsx에 각 파일을 연동
- 'src / assets /'에 'reset.css', 'style.css'를 만들어서 'App.js'에 연동
- 'App.js'에서 'Main' 세부파트는 'src / components'에 각 파일을 만들어 작업('assets / css'에 각 css를 옮기고 'card.jsx'에 이미지를 불러올때 import시켜서 가져옴)
- 'App.js'에서 proos기능을 사용하여 className에 element, fonnts를 전달함
- 반복적인 작업이 가능한 'Card.jsx'와 'Text.jsx'에서는 배열을 생성 후 map()매서드를 활용하여 작업함