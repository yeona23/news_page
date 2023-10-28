# 요구사항

1. create-react-app 으로 프로젝트를 세팅합니다.
2. 검색 창에서 검색 키워드를 입력하면 기사 리스트를 보여줍니다. 이 과정에서 위에 주어진 API를 사용해 봅니다.
    1. 기사 리스트(articles) 데이터 구조
    
    ```jsx
    {
    	"source": {
    		"id": null,
    		"name": "Biztoc.com"
    	},
    	"author": "foxbusiness.com",
    	"title": "US appeals court to reconsider decision on Elon Musk's 2018 anti-union tweet",
    	"description": "Tesla CEO Elon Musk will have a second chance to prove in court that his anti-union tweet from 2018 was not an illegal threat. The 5th Circuit Court of Appeals in New Orleans has agreed to Telsa's request for an \"en banc\" review of its recent decision that Mu…",
    	"url": "https://biztoc.com/x/0bcbbe2ca9fe5185",
    	"urlToImage": "https://c.biztoc.com/p/0bcbbe2ca9fe5185/og.webp",
    	"publishedAt": "2023-07-22T17:34:06Z",
    	"content": "Tesla CEO Elon Musk will have a second chance to prove in court that his anti-union tweet from 2018 was not an illegal threat.The 5th Circuit Court of Appeals in New Orleans has agreed to Telsa's req… [+293 chars]"
    }
    ```
    
3. 검색 할 때마다 리스트가 새롭게 결과들로 리렌더링이 일어나며, 이 과정에서 로딩 처리 및 에러 처리 화면도 구현해 봅니다.
4. 날짜 필터를 통해 기간을 설정해서 해당 기간에 나온 기사들만 볼 수 있는 기능도 구현합니다.
5. `도전과제1` 무한 스크롤링 기능을 구현해 봅니다.
6. `도전과제2` Google Firebase에 데이터베이스를 하나 만들어서 좋아요를 누른 기사들을 저장하고 보여주는 기능을 구현해 봅니다.

# 주의사항

1. HTML과 CSS는 와이어프레임을 참고해서 레이아웃이 구분될 정도로만 만들어 주시면 됩니다. 너무 디자인에 집착하지 않아도 됩니다.
2. css 클래스명은 BEM 방식을 따르기를 권장합니다.
3. 주어진 프로젝트 설명을 명확하게 이해하고 해당 요구사항대로 정확하게 구현을 하는 것에 집중합니다.
4. 리액트 빌트인 훅(useEffect, useMemo, useCallback 등)를 적절하게 목적에 맞게 사용합니다.
5. redux를 통해 전역 상태관리를 해 봅니다.
6. 하나의 컴포넌트는 하나의 역할을 하는 방향으로 만들어 봅니다.
7. 변수명, 함수명을 명시적으로 바로 잘 이해할 수 있게 작성해 봅니다.
8. [API 공식 문서](https://newsapi.org/docs)를 통해 해당 API 사용법을 익힙니다.
