// Mock Data - Topics
const topics = [
    {
        id: 'topic-001',
        title: '까다로운 엄마 입맛',
        description: '엄마 입맛에 맞는 음식을 찾기 힘든 부모님을 위한 여행 후기',
        image: 'https://picsum.photos/id/21/200/200',
        members: 1240,
        posts: 356,
        emoji: '👩‍🍳'
    },
    {
        id: 'topic-002',
        title: '60대 부모님 장기 유럽 여행',
        description: '3주 이상의 유럽 여행 경험담 및 팁 공유',
        image: 'https://picsum.photos/id/23/200/200',
        members: 892,
        posts: 234,
        emoji: '🏛️'
    },
    {
        id: 'topic-003',
        title: '산티아고 순례 부모님이랑',
        description: '산티아고 데 콤포스텔라 순례 경험 공유',
        image: 'https://picsum.photos/id/24/200/200',
        members: 456,
        posts: 128,
        emoji: '🚶'
    },
    {
        id: 'topic-004',
        title: '별거 없구만 들은 피해자 방',
        description: '"별거 없다"는 부모님말씀 후 낭패본 여행지들',
        image: 'https://picsum.photos/id/25/200/200',
        members: 2105,
        posts: 567,
        emoji: '🤷'
    },
    {
        id: 'topic-005',
        title: '휠체어 접근성 여행지',
        description: '휠체어로 다니기 편한 여행지 정보 공유',
        image: 'https://picsum.photos/id/26/200/200',
        members: 634,
        posts: 189,
        emoji: '♿'
    },
    {
        id: 'topic-006',
        title: '1박2일 근처 효도 여행',
        description: '주말에 다녀올 수 있는 1박2일 여행지',
        image: 'https://picsum.photos/id/27/200/200',
        members: 1876,
        posts: 445,
        emoji: '🏨'
    }
];

// Mock Data - Search Contents
const searchContents = [
    // YouTube Videos
    {
        id: 'search-001',
        type: 'youtube',
        title: '60대 부모님과 다낭 4박5일 완벽 가이드',
        channel: '보보TV',
        views: '245K',
        likes: '8.2K',
        thumbnail: 'https://picsum.photos/id/100/120/90',
        date: '2주 전'
    },
    {
        id: 'search-002',
        type: 'youtube',
        title: '부모님이 좋아할 수밖에 없는 일본 여행지 BEST 5',
        channel: '여행하는 딸',
        views: '156K',
        likes: '5.1K',
        thumbnail: 'https://picsum.photos/id/101/120/90',
        date: '3주 전'
    },
    {
        id: 'search-003',
        type: 'youtube',
        title: '휠체어 여행도 가능한 동남아 여행지',
        channel: '접근성 여행자',
        views: '89K',
        likes: '3.4K',
        thumbnail: 'https://picsum.photos/id/102/120/90',
        date: '1개월 전'
    },
    {
        id: 'search-004',
        type: 'youtube',
        title: '70대 부모님 산티아고 순례 후기 (감동주의)',
        channel: '효도 프로젝트',
        views: '512K',
        likes: '15.2K',
        thumbnail: 'https://picsum.photos/id/103/120/90',
        date: '1개월 전'
    },
    {
        id: 'search-005',
        type: 'youtube',
        title: '부모님 식도락 여행 - 한식당 많은 해외도시 TOP 10',
        channel: '맛있는 효도',
        views: '328K',
        likes: '9.8K',
        thumbnail: 'https://picsum.photos/id/104/120/90',
        date: '2개월 전'
    },
    // Naver Blog
    {
        id: 'search-006',
        type: 'blog',
        title: '60대 부모님과 방콕 여행, 일정표부터 음식 팁까지 완벽 정리',
        channel: '효자의 일상',
        views: '2.5K',
        likes: '156',
        thumbnail: 'https://picsum.photos/id/105/120/90',
        date: '5일 전'
    },
    {
        id: 'search-007',
        type: 'blog',
        title: '까다로운 엄마도 만족한 싱가포르 여행, 이렇게 준비했어요',
        channel: '여행하는 엄마',
        views: '1.8K',
        likes: '124',
        thumbnail: 'https://picsum.photos/id/106/120/90',
        date: '1주 전'
    },
    {
        id: 'search-008',
        type: 'blog',
        title: '부모님 나이대별 여행지 추천 + 사전 준비물 체크리스트',
        channel: '여행 플래너 김',
        views: '3.2K',
        likes: '201',
        thumbnail: 'https://picsum.photos/id/107/120/90',
        date: '3일 전'
    },
    {
        id: 'search-009',
        type: 'blog',
        title: '인도네시아 발리 - 어르신도 편하게 다닐 수 있는 루트',
        channel: '발리 여행 일지',
        views: '1.2K',
        likes: '87',
        thumbnail: 'https://picsum.photos/id/108/120/90',
        date: '2주 전'
    },
    // Brunch
    {
        id: 'search-010',
        type: 'brunch',
        title: '효도의 의미를 다시 생각하게 만든 부모님과의 캄보디아 여행',
        channel: '감성 여행가',
        views: '892',
        likes: '234',
        thumbnail: 'https://picsum.photos/id/109/120/90',
        date: '1주 전'
    },
    {
        id: 'search-011',
        type: 'brunch',
        title: '여행사 직원이 추천하는 50-70대 부모님 여행지 선택법',
        channel: '여행사 인사이트',
        views: '1.5K',
        likes: '456',
        thumbnail: 'https://picsum.photos/id/110/120/90',
        date: '10일 전'
    },
    {
        id: 'search-012',
        type: 'brunch',
        title: '부모님 나이대 여행 시 꼭 체크해야 할 5가지',
        channel: '의료 여행 전문가',
        views: '645',
        likes: '178',
        thumbnail: 'https://picsum.photos/id/111/120/90',
        date: '3주 전'
    }
];

// 마이페이지 데이터
const mySavedPlaces = [
    { title: '제주도 귤밭', img: 'https://picsum.photos/id/10/200/200' },
    { title: '경주 한옥마을', img: 'https://picsum.photos/id/11/200/200' },
    { title: '강릉 바다', img: 'https://picsum.photos/id/12/200/200' },
    { title: '부산 감천마을', img: 'https://picsum.photos/id/13/200/200' }
];

// Current search filter
let currentSearchFilter = 'all';
const countries = [
    {
        id: 'country-001',
        name: '다낭',
        countryLabel: '베트남',
        thumbnailImage: 'https://picsum.photos/id/13/600/400',
        landmarkImage: 'https://picsum.photos/id/13/1200/800',
        difficultyLevel: 1, // 1: Easy, 2: Medium, 3: Hard
        rankScore: 4.8,
        tags: ['온화한날씨', '한식당많음'],
        aiStats: { transport: 90, food: 95, safety: 85 },
        comments: [
            { text: "부모님이 음식 안 맞을까 걱정했는데 한식당이 많아서 정말 다행이었어요!", type: "left" },
            { text: "시내 이동이 그랩으로 너무 편해서 어르신들 걷는 부담이 적었습니다. 강추!", type: "right" },
            { text: "날씨가 덥긴 했지만 리조트 휴양하기엔 최고였습니다.", type: "left" }
        ],
        attractions: [
            { name: '바나힐', img: 'https://picsum.photos/id/12/600/400' },
            { name: '미케 비치', img: 'https://picsum.photos/id/14/600/400' }
        ]
    },
    {
        id: 'country-002',
        name: '삿포로',
        countryLabel: '일본',
        thumbnailImage: 'https://picsum.photos/id/28/600/400',
        landmarkImage: 'https://picsum.photos/id/28/1200/800',
        difficultyLevel: 2,
        rankScore: 4.6,
        tags: ['자연경관', '온천'],
        aiStats: { transport: 85, food: 90, safety: 95 },
        comments: [
            { text: "겨울에 눈길 걷는게 부모님껜 조금 힘들었어요. 그래도 온천은 대만족!", type: "left" },
            { text: "음식이 깔끔하고 입맛에 잘 맞으셨어요.", type: "right" }
        ],
        attractions: [
            { name: '오도리 공원', img: 'https://picsum.photos/id/29/600/400' },
            { name: '노보리베츠 온천', img: 'https://picsum.photos/id/10/600/400' }
        ]
    },
    {
        id: 'country-003',
        name: '치앙마이',
        countryLabel: '태국',
        thumbnailImage: 'https://picsum.photos/id/15/600/400',
        landmarkImage: 'https://picsum.photos/id/15/1200/800',
        difficultyLevel: 1,
        rankScore: 4.5,
        tags: ['느긋한여행', '사찰'],
        aiStats: { transport: 70, food: 85, safety: 80 },
        comments: [
            { text: "조용하고 한적해서 부모님이 힐링하기 좋았다고 하셨습니다.", type: "left" },
            { text: "대중교통이 조금 불편해서 택시 투어를 이용했어요.", type: "right" }
        ],
        attractions: [
            { name: '도이수텝', img: 'https://picsum.photos/id/16/600/400' },
            { name: '올드타운', img: 'https://picsum.photos/id/17/600/400' }
        ]
    }
];

// Helper: Render Stars
const renderStars = (level) => {
    let stars = '';
    const starCount = 4 - level; // Level 1 -> 3 stars, Level 2 -> 2 stars, Level 3 -> 1 star
    for(let i=0; i<3; i++) {
        stars += (i < starCount) ? '⭐' : '';
    }
    return `<span class="difficulty-stars">${stars}</span>`;
};

// Current Navigation State
let currentNav = 'home';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    setupNavigation();
});

// Render Home Page
function renderHome() {
    const recommendedContainer = document.getElementById('recommended-container');
    const rankingContainer = document.getElementById('ranking-container');
    
    // Clear containers
    recommendedContainer.innerHTML = '';
    rankingContainer.innerHTML = '';

    // Render Recommended (Carousel)
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'glass-card country-card';
        // Use mousedown/mouseup to detect drag vs click
        let startX, startY;
        card.onmousedown = (e) => { startX = e.pageX; startY = e.pageY; };
        card.onmouseup = (e) => {
            const diffX = Math.abs(e.pageX - startX);
            const diffY = Math.abs(e.pageY - startY);
            if (diffX < 5 && diffY < 5) {
                openDetail(country.id);
            }
        };
        
        card.innerHTML = `
            <img src="${country.thumbnailImage}" alt="${country.name}" class="country-image">
            <div class="country-info">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 class="text-md font-bold">${country.name}</h3>
                    ${renderStars(country.difficultyLevel)}
                </div>
                <p class="text-xs text-secondary">${country.countryLabel}</p>
                <div class="country-tags">
                    ${country.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </div>
        `;
        recommendedContainer.appendChild(card);
    });

    // Render Ranking
    const sortedCountries = [...countries].sort((a, b) => b.rankScore - a.rankScore);
    sortedCountries.forEach((country, index) => {
        const item = document.createElement('div');
        item.className = 'glass-card ranking-item';
        item.onclick = () => openDetail(country.id);
        
        const rankClass = index < 3 ? 'rank-number top-3' : 'rank-number';
        
        item.innerHTML = `
            <div class="${rankClass}">${index + 1}</div>
            <img src="${country.thumbnailImage}" alt="${country.name}" class="ranking-img">
            <div class="ranking-details">
                <h4 class="text-md font-bold" style="margin-bottom: 2px;">${country.name} <span class="text-sm font-normal text-secondary">| ${country.countryLabel}</span></h4>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <span class="text-sm" style="color: var(--accent-color);">★ ${country.rankScore}</span>
                    <span class="text-secondary text-xs">•</span>
                    <span class="text-xs text-secondary">난이도 ${renderStars(country.difficultyLevel)}</span>
                </div>
            </div>
            <span class="material-icons text-secondary">chevron_right</span>
        `;
        rankingContainer.appendChild(item);
    });

    // Add drag-to-scroll for desktop users
    let isDown = false;
    let startX;
    let scrollLeft;
    
    recommendedContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - recommendedContainer.offsetLeft;
        scrollLeft = recommendedContainer.scrollLeft;
    });
    recommendedContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });
    recommendedContainer.addEventListener('mouseup', () => {
        isDown = false;
    });
    recommendedContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - recommendedContainer.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        recommendedContainer.scrollLeft = scrollLeft - walk;
    });
}

// Open Detail Page
function openDetail(countryId) {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;

    // Set Hero
    document.getElementById('detail-img').src = country.landmarkImage;
    document.getElementById('detail-title').innerText = country.name;
    document.getElementById('detail-subtitle').innerText = country.countryLabel;

    // Set AI Stats
    setStat('transport', country.aiStats.transport);
    setStat('food', country.aiStats.food);
    setStat('safety', country.aiStats.safety);

    // Render Comments
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
    country.comments.forEach(comment => {
        const bubble = document.createElement('div');
        bubble.className = `comment-bubble ${comment.type === 'right' ? 'right' : ''}`;
        bubble.innerText = comment.text;
        commentsContainer.appendChild(bubble);
    });

    // Render Attractions
    const attractionsContainer = document.getElementById('attractions-container');
    attractionsContainer.innerHTML = '';
    country.attractions.forEach(attr => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <img src="${attr.img}" alt="${attr.name}" class="attraction-img">
            <div class="attraction-name">${attr.name}</div>
        `;
        attractionsContainer.appendChild(card);
    });

    // Page Transition
    window.scrollTo(0, 0);
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('community-page').classList.remove('active');
    document.getElementById('search-page').classList.remove('active');
    document.getElementById('mypage-page').classList.remove('active');
    document.getElementById('detail-page').classList.add('active');
}

// Set Progress Bar
function setStat(id, value) {
    document.getElementById(`stat-${id}-text`).innerText = `${value}점`;
    setTimeout(() => {
        document.getElementById(`stat-${id}-bar`).style.width = `${value}%`;
    }, 100); // Animate after render
}

// Go Back Home
function goHome() {
    window.scrollTo(0, 0);
    document.getElementById('detail-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    setActiveNav('home');
}

// Setup Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navType = this.getAttribute('data-nav');
            navigateTo(navType);
        });
    });
    
    // Set initial active nav
    setActiveNav('home');
}

// Clear all active page views
function clearAllPages() {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('detail-page').classList.remove('active');
    document.getElementById('community-page').classList.remove('active');
    document.getElementById('search-page').classList.remove('active');
    document.getElementById('mypage-page').classList.remove('active');
}

// Navigate to section
function navigateTo(navType) {
    currentNav = navType;
    setActiveNav(navType);
    window.scrollTo(0, 0);
    clearAllPages();
    
    switch(navType) {
        case 'home':
            document.getElementById('home-page').classList.add('active');
            break;
        case 'community':
            document.getElementById('community-page').classList.add('active');
            renderCommunity();
            break;
        case 'search':
            document.getElementById('search-page').classList.add('active');
            renderSearch();
            break;
        case 'mypage':
            document.getElementById('mypage-page').classList.add('active');
            renderMyPage();
            break;
        default:
            break;
    }
}

// Set Active Navigation Item
function setActiveNav(navType) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-nav') === navType) {
            item.classList.add('active');
        }
    });
}

// Scroll Carousel
function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 260; // Approximate card width + gap
    
    if (direction === -1) {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 1) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Render Community Page
function renderCommunity() {
    const topicContainer = document.getElementById('topic-container');
    topicContainer.innerHTML = '';

    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => {
            alert(`${topic.title} 토픽으로 들어가기\n(추후 구현 예정)`);
        };
        
        card.innerHTML = `
            <img src="${topic.image}" alt="${topic.title}" class="topic-image">
            <div class="topic-content">
                <div>
                    <h3 class="topic-title">${topic.emoji} ${topic.title}</h3>
                    <p class="topic-description">${topic.description}</p>
                </div>
                <div class="topic-meta">
                    <div class="topic-meta-item">
                        <span>👥 ${topic.members.toLocaleString()}</span>
                    </div>
                    <div class="topic-meta-item">
                        <span>📝 ${topic.posts.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
        topicContainer.appendChild(card);
    });
}

// Render Search Page
function renderSearch() {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    let results = searchContents;
    if (currentSearchFilter !== 'all') {
        results = searchContents.filter(item => item.type === currentSearchFilter);
    }
    
    results.forEach(result => {
        const card = document.createElement('div');
        card.className = 'search-result-card';
        card.onclick = () => {
            alert(`${result.title}\n작성자: ${result.channel}\n(클릭 시 상세 페이지로 이동 예정)`);
        };
        
        let badgeText = '';
        if (result.type === 'youtube') badgeText = '📺 유튜브';
        else if (result.type === 'blog') badgeText = '📝 블로그';
        else if (result.type === 'brunch') badgeText = '📖 브런치';
        
        card.innerHTML = `
            <img src="${result.thumbnail}" alt="${result.title}" class="search-result-thumbnail">
            <div class="search-result-content">
                <div class="search-result-header">
                    <div style="flex: 1;">
                        <div class="search-result-title">${result.title}</div>
                    </div>
                    <span class="search-result-badge ${result.type}">${badgeText}</span>
                </div>
                <div class="search-result-meta">
                    <div class="search-result-meta-item">
                        <span class="search-result-channel">${result.channel}</span>
                    </div>
                    <span>•</span>
                    <div class="search-result-meta-item">
                        👁️ ${result.views}
                    </div>
                    <div class="search-result-meta-item">
                        👍 ${result.likes}
                    </div>
                    <div class="search-result-meta-item">
                        ${result.date}
                    </div>
                </div>
            </div>
        `;
        searchResults.appendChild(card);
    });
}

// Filter Search Results
function filterSearch(type) {
    currentSearchFilter = type;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${type}"]`).classList.add('active');
    
    renderSearch();
}

// Render My Page Saved Places Elements
function renderMyPage() {
    const list = document.getElementById('saved-places-list');
    if (!list) return;
    
    list.innerHTML = mySavedPlaces.map(place => `
        <div class="attraction-card">
            <img src="${place.img}" class="attraction-img">
            <div class="attraction-name">${place.title}</div>
        </div>
    `).join('');
}
// Add this to handle the family plan button click
function openFamilyPlans() {
    alert("✨ 📋👨‍👩‍👧‍👦 우리 가족 계획 기능 준비 중! ✨\n\n부모님 맞춤형 여행 일정표와 짐 싸기 체크리스트를 만들 수 있는 공간이 곧 찾아옵니다!");
}
