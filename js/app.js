// MBTI Quotes App - Main JavaScript

(function() {
    'use strict';

    // DOM Elements
    const typeName = document.getElementById('typeName');
    const typeDesc = document.getElementById('typeDesc');
    const quoteText = document.getElementById('quoteText');
    const quoteSource = document.getElementById('quoteSource');
    const refreshBtn = document.getElementById('refreshBtn');
    const quoteSection = document.getElementById('quoteSection');
    const mbtiButtons = document.querySelectorAll('.mbti-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');

    // State
    let currentType = null;
    let currentQuoteIndex = 0;
    let usedQuotes = [];

    // ========== Utility Functions ==========

    // 简单的字符串哈希函数，用于基于日期生成种子
    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }

    // 基于种子的伪随机数生成器
    function seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    // 获取今日日期字符串
    function getTodayString() {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    // 基于日期洗牌数组
    function shuffleArrayByDate(array, mbtiType) {
        const seed = hashString(getTodayString() + mbtiType);
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    // ========== Theme Functions ==========

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);

        // Update active state
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });

        // Save to localStorage
        localStorage.setItem('mbti-theme', theme);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('mbti-theme') || 'red';
        setTheme(savedTheme);
    }

    // ========== MBTI Selection Functions ==========

    function selectMBTI(type) {
        if (!mbtiData[type]) return;

        currentType = type;
        const data = mbtiData[type];

        // Update UI
        typeName.textContent = data.name;
        typeDesc.textContent = data.desc;

        // Update button states
        mbtiButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });

        // Enable refresh button
        refreshBtn.disabled = false;

        // Reset used quotes for this type
        usedQuotes = shuffleArrayByDate(data.quotes, type);
        currentQuoteIndex = 0;

        // Show first quote
        showQuote();

        // Add loading animation
        quoteSection.querySelector('.quote-card').classList.add('loading');
        setTimeout(() => {
            quoteSection.querySelector('.quote-card').classList.remove('loading');
        }, 300);
    }

    function showQuote() {
        if (!currentType || usedQuotes.length === 0) return;

        const quote = usedQuotes[currentQuoteIndex];
        quoteText.textContent = `"${quote.text}"`;
        quoteSource.textContent = `—— ${quote.source}`;
    }

    function nextQuote() {
        if (!currentType) return;

        currentQuoteIndex = (currentQuoteIndex + 1) % usedQuotes.length;

        // Add loading animation
        quoteSection.querySelector('.quote-card').classList.add('loading');

        setTimeout(() => {
            showQuote();
            quoteSection.querySelector('.quote-card').classList.remove('loading');
        }, 200);
    }

    // ========== Event Listeners ==========

    // Theme selection
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.dataset.theme);
        });
    });

    // MBTI selection
    mbtiButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectMBTI(btn.dataset.type);
        });
    });

    // Refresh button
    refreshBtn.addEventListener('click', nextQuote);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' && currentType) {
            e.preventDefault();
            nextQuote();
        }
    });

    // ========== Initialization ==========

    function init() {
        loadSavedTheme();

        // Add pixel cursor effect on buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.style.cursor = 'pointer';
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
