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

// Mock Data - Countries
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
    // Keyboard/Click event listeners for nav items
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

// Navigate to section
function navigateTo(navType) {
    currentNav = navType;
    setActiveNav(navType);
    window.scrollTo(0, 0);
    
    switch(navType) {
        case 'home':
            document.getElementById('home-page').classList.add('active');
            document.getElementById('detail-page').classList.remove('active');
            document.getElementById('community-page').classList.remove('active');
            break;
        case 'community':
            document.getElementById('home-page').classList.remove('active');
            document.getElementById('detail-page').classList.remove('active');
            document.getElementById('community-page').classList.add('active');
            renderCommunity();
            break;
        case 'search':
            document.getElementById('home-page').classList.add('active');
            document.getElementById('detail-page').classList.remove('active');
            document.getElementById('community-page').classList.remove('active');
            showComingSoon('Search');
            break;
        case 'mypage':
            document.getElementById('home-page').classList.add('active');
            document.getElementById('detail-page').classList.remove('active');
            document.getElementById('community-page').classList.remove('active');
            showComingSoon('My Page');
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

// Show Coming Soon Message
function showComingSoon(feature) {
    const homeContent = document.getElementById('home-page');
    homeContent.classList.add('active');
    alert(`🚀 ${feature} 기능은 준비 중입니다!\n곧 더 멋진 기능으로 찾아올게요.`);
}

// Scroll Carousel
function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 260; // Approximate card width + gap
    
    if (direction === -1) {
        // Scroll left
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 1) {
        // Scroll right
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
