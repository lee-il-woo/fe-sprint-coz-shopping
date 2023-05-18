# fe-sprint-coz-shopping

![프로젝트 동작 이미지](./image/soloproject.gif)

이 프로젝트는 React를 사용하여 구축된 쇼핑 웹사이트입니다. 이 웹사이트는 다양한 상품들을 보여주고, 사용자가 원하는 상품을 선택하고 필터링할 수 있는 기능을 제공합니다.

## 라이브러리
@fortawesome/fontawesome-svg-core: ^6.4.0 - SVG 아이콘 라이브러리<br>
@fortawesome/free-solid-svg-icons: ^6.4.0 - SVG 아이콘 라이브러리<br>
@fortawesome/react-fontawesome: ^0.2.0 - React용 SVG 아이콘 라이브러리<br>
@headlessui/react: ^1.7.14 - UI 구성 요소 라이브러리<br>
@reduxjs/toolkit: ^1.9.5 - Redux를 더 쉽게 사용할 수 있도록 도와주는 라이브러리<br>
@testing-library/jest-dom: ^5.16.5 - Jest와 DOM 테스팅 라이브러리<br>
@testing-library/react: ^13.4.0 - React 컴포넌트 테스팅 라이브러리<br>
@testing-library/user-event: ^13.5.0 - 사용자 이벤트 테스팅 라이브러리<br>
axios: ^1.4.0 - HTTP 요청을 보내는 데 사용되는 라이브러리<br>
react: ^18.2.0 - 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리<br>
react-dom: ^18.2.0 - React를 웹사이트에 렌더링하는 데 사용되는 라이브러리<br>
react-intersection-observer: ^9.4.3 - Intersection Observer API를 React에 통합하는 라이브러리<br>
react-redux: ^8.0.5 - React와 Redux를 연결하는 라이브러리<br>
react-router-dom: ^6.11.1 - 웹 애플리케이션에서 라우팅을 처리하는 라이브러리<br>
react-scripts: 5.0.1 - 프로젝트 구성과 관련된 작업을 단순화하는 라이브러리<br>
react-toastify: ^9.1.3 - React 애플리케이션에서 토스트 알림을 생성하는 라이브러리<br>
styled-components: ^6.0.0-rc.1 - 컴포넌트를 스타일링하는 데 사용되는 CSS-in-JS 라이브러리<br>
web-vitals: ^2.1.4 - 웹 성능을 측정하는 데 사용되는 라이브러리<br>
tailwindcss: ^3.3.2 (개발 의존성) - 유틸리티-퍼스트 CSS 프레임워크<br>

## 프로젝트 구조
src<br>
|-- App.css<br>
|-- App.js<br>
|-- App.test.js<br>
|-- component **각 페이지에 해당하는 리액트 컴포넌트들이 저장된 폴더.**<br>
|   |-- DropDown.js<br>
|   |-- FilterProduct.js<br>
|   |-- Footer.js<br>
|   |-- Header.js<br>
|   |-- ProductCard.js<br>
|   |-- ProductList.js<br>
|   `-- ProductModal.js<br>
|-- index.css<br>
|-- index.js<br>
|-- logo.svg<br>
|-- page **각 페이지에 해당하는 리액트 컴포넌트들이 저장된 폴더.**<br>
|   |-- BookmarkPage.js<br>
|   |-- MainPage.js<br>
|   `-- ProductPage.js<br>
|-- reportWebVitals.js<br>
|-- setupTests.js<br>
|-- store **Redux를 사용한 상태 관리 코드가 저장된 폴더.**<br>
|   |-- bookmarkSlice.js<br>
|   |-- productSlice.js<br>
|   `-- store.js<br>
`-- utils **재사용 가능한 함수 및 데이터가 저장된 폴더.**<br>
    |-- formatNumberWithCommas.js<br>
    |-- listTitles.js<br>
    `-- productType.js<br>

## 실행 방법
프로젝트를 로컬에서 실행하려면 다음의 단계를 따르세요:

1. 이 레포지토리를 클론합니다.
2. client 폴더로 이동합니다.
3. 터미널에서 npm install 명령어를 실행하여 필요한 의존성을 설치합니다.
4. npm start 명령어를 실행하여 개발 서버를 시작합니다.
5. 웹 브라우저에서 http://localhost:3000 주소를 입력하여 웹사이트를 확인합니다.
