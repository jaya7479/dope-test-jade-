/**
 * DOPE Personality Test - Main Application
 * Handles UI state, navigation, and result calculations
 */

class DOPETest {
  constructor() {
    this.current = 0;
    this.answers = new Array(TOTAL_QUESTIONS).fill(null);
    this.userName = "";
    this.lastResult = null;
    this.loadState();
  }

  /**
   * Load state from localStorage (resume functionality)
   */
  loadState() {
    const saved = localStorage.getItem("dope_test_state");
    if (saved) {
      const state = JSON.parse(saved);
      this.answers = state.answers;
      this.userName = state.userName;
      this.current = state.current;
    }
  }

  /**
   * Save state to localStorage
   */
  saveState() {
    const state = {
      answers: this.answers,
      userName: this.userName,
      current: this.current
    };
    localStorage.setItem("dope_test_state", JSON.stringify(state));
  }

  /**
   * Start the test
   */
  startTest() {
    this.userName = document.getElementById("user-name").value.trim();
    this.current = 0;
    this.answers = new Array(TOTAL_QUESTIONS).fill(null);
    this.saveState();
    this.showScreen("test");
    this.renderQuestion();
  }

  /**
   * Switch between screens
   */
  showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("screen-" + id).classList.add("active");
    window.scrollTo(0, 0);
  }

  /**
   * Render current question
   */
  renderQuestion() {
    if (this.current >= TOTAL_QUESTIONS) {
      this.showResult();
      return;
    }

    const question = QUESTIONS[this.current];
    const percentage = Math.round((this.current / TOTAL_QUESTIONS) * 100);
    const answer = this.answers[this.current];

    // Update progress
    document.getElementById("q-eyebrow").textContent = `Pernyataan ${this.current + 1}`;
    document.getElementById("q-text").textContent = question.q;
    document.getElementById("prog-count").textContent = `Pernyataan ${this.current + 1} dari ${TOTAL_QUESTIONS}`;
    document.getElementById("prog-pct").textContent = `${percentage}%`;
    document.getElementById("prog-fill").style.width = `${percentage}%`;

    // Update buttons
    const btnY = document.getElementById("btn-y");
    const btnN = document.getElementById("btn-n");
    const btnNext = document.getElementById("btn-next");
    const btnBack = document.getElementById("btn-back");

    btnY.className = `ans-btn${answer === "Y" ? " Y" : ""}`;
    btnN.className = `ans-btn${answer === "N" ? " N" : ""}`;
    btnNext.disabled = answer === null;
    btnBack.disabled = this.current === 0;
  }

  /**
   * Record answer and advance
   */
  answer(value) {
    this.answers[this.current] = value;
    this.saveState();

    const btnY = document.getElementById("btn-y");
    const btnN = document.getElementById("btn-n");

    btnY.className = `ans-btn${value === "Y" ? " Y" : ""}`;
    btnN.className = `ans-btn${value === "N" ? " N" : ""}`;
    document.getElementById("btn-next").disabled = false;

    // Auto-advance after brief delay
    setTimeout(() => {
      if (this.current < TOTAL_QUESTIONS - 1) {
        this.goNext();
      } else {
        this.showResult();
      }
    }, 280);
  }

  /**
   * Navigate to next question
   */
  goNext() {
    if (this.answers[this.current] === null) return;
    if (this.current < TOTAL_QUESTIONS - 1) {
      this.current++;
      this.saveState();
      this.renderQuestion();
    } else {
      this.showResult();
    }
  }

  /**
   * Navigate to previous question
   */
  goBack() {
    if (this.current > 0) {
      this.current--;
      this.saveState();
      this.renderQuestion();
    }
  }

  /**
   * Calculate personality scores
   */
  calculateScores() {
    const scores = { D: 0, O: 0, P: 0, E: 0 };
    QUESTIONS.forEach((q, i) => {
      if (this.answers[i] === "Y") {
        scores[q.type]++;
      }
    });
    return scores;
  }

  /**
   * Get dominant personality type
   */
  getDominantType(scores) {
    return Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
  }

  /**
   * Display result screen
   */
  showResult() {
    const scores = this.calculateScores();
    const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
    const dominant = this.getDominantType(scores);
    const bird = BIRDS[dominant];

    // Create ranked list
    const ranked = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);

    // Store result for printing
    this.lastResult = {
      dominant,
      scores,
      total,
      ranked,
      bird,
      userName: this.userName,
      timestamp: new Date()
    };

    // Build result HTML
    const html = this.buildResultHTML(scores, total, ranked, dominant, bird);
    document.getElementById("result-inner").innerHTML = html;

    this.showScreen("result");

    // Clear saved state on completion
    localStorage.removeItem("dope_test_state");
  }

  /**
   * Build result HTML
   */
  buildResultHTML(scores, total, ranked, dominant, bird) {
    const greeting = this.userName
      ? `Halo, <strong>${this.escapeHtml(this.userName)}!</strong>`
      : "Hasil Tes Anda";

    const tiles = ["D", "O", "P", "E"]
      .map(type => this.buildScoreTile(type, scores[type], total, dominant))
      .join("");

    const rankList = ranked
      .map((r, i) => this.buildRankItem(r, i))
      .join("");

    const strengths = bird.strengths
      .map(s => `
        <div class="trait-item">
          <span class="trait-icon" style="color:#0F7B72">✓</span>
          <span>${s}</span>
        </div>
      `)
      .join("");

    const weaknesses = bird.weaknesses
      .map(w => `
        <div class="trait-item">
          <span class="trait-icon" style="color:#C0392B">△</span>
          <span>${w}</span>
        </div>
      `)
      .join("");

    return `
      <div class="result-hero">
        <div class="result-emoji">${bird.emoji}</div>
        <div class="result-eyebrow">${greeting.replace(/<[^>]*>/g, "")} — Tipe Dominan</div>
        <div class="result-birdname">${bird.name}</div>
        <div class="result-tagline">${bird.tagline}</div>
      </div>

      <div class="scores-row">${tiles}</div>

      <div class="info-card">
        <div class="info-card-title">Urutan Kepribadian</div>
        ${rankList}
      </div>

      <div class="info-card">
        <div class="info-card-title">Kekuatan Utama</div>
        ${strengths}
      </div>

      <div class="info-card">
        <div class="info-card-title">Area Pengembangan</div>
        ${weaknesses}
      </div>

      <div class="info-card">
        <div class="info-card-title">Gaya Komunikasi</div>
        <div class="comm-text">${bird.comm}</div>
      </div>
    `;
  }

  /**
   * Build individual score tile
   */
  buildScoreTile(type, score, total, dominant) {
    const bird = BIRDS[type];
    const percentage = Math.round((score / total) * 100);
    const isDominant = type === dominant;

    return `
      <div class="score-tile ${type}${isDominant ? " dominant" : ""}">
        <div class="score-tile-emoji">${bird.emoji}</div>
        <div class="score-tile-val">${score}</div>
        <div class="score-tile-label">${bird.name.split(" ")[0]}</div>
        <div class="score-bar-track">
          <div class="score-bar-fill" style="width:${percentage}%;background:${bird.bar}"></div>
        </div>
      </div>
    `;
  }

  /**
   * Build rank item
   */
  buildRankItem(entry, index) {
    const [type, score] = entry;
    const bird = BIRDS[type];
    return `
      <div class="trait-item">
        <span class="trait-icon">${bird.emoji}</span>
        <span>#${index + 1} ${bird.name} — <strong>${score} poin</strong></span>
      </div>
    `;
  }

  /**
   * Escape HTML special characters
   */
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Restart test
   */
  restartTest() {
    this.current = 0;
    this.answers = new Array(TOTAL_QUESTIONS).fill(null);
    this.userName = "";
    localStorage.removeItem("dope_test_state");
    this.showScreen("welcome");
    document.getElementById("user-name").value = "";
  }

  /**
   * Print/Save result
   */
  printResult() {
    window.print();
  }
}

// Initialize app
const app = new DOPETest();

// Prevent accidental navigation
window.addEventListener("beforeunload", (e) => {
  if (app.current > 0 && app.current < TOTAL_QUESTIONS) {
    e.preventDefault();
    e.returnValue = "";
  }
});
