import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Main from './components/Main'
import Slider from './components/Slider'
import Image from './components/Image'
import ImgText from './components/ImgText'
import Card from './components/Card'
import Banner from './components/Banner'
import Text from './components/Text'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Header fonts='nexon' />
            <Main>
                <Slider element='nexon' title='슬라이드 유형01' />
                <Image element='nexon section' title='포트폴리오가 실력이다.' />
                <ImgText element='nexon section' title='이미지 텍스트 유형' />
                <Card element='nexon section' title='웹스토리보이 강의' />
                <Banner element='nexon section' title='배너 영역' />
                <Text element='nexon section' title='텍스트 유형01' />
            </Main>
            <Footer element='nexon section' title='푸터 영역' />
        </>
    )
}

export default App