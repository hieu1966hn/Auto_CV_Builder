const form = document.getElementById('cv-form');
const preview = {
  name: document.getElementById('preview-name'),
  headline: document.getElementById('preview-headline'),
  summary: document.getElementById('preview-summary'),
  location: document.getElementById('preview-location'),
  email: document.getElementById('preview-email'),
  phone: document.getElementById('preview-phone'),
  skills: document.getElementById('preview-skills'),
  experience: document.getElementById('preview-experience'),
  education: document.getElementById('preview-education'),
};
const validationSummary = document.getElementById('validation-summary');
const statusBadge = document.getElementById('preview-status');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const edgeDataButton = document.getElementById('edge-data-btn');
const resetButton = document.getElementById('reset-btn');

const parseLines = (value) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const updateList = (element, items) => {
  element.innerHTML = '';
  if (items.length === 0) {
    element.innerHTML = '<li>Chưa có dữ liệu</li>';
    return;
  }
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    element.appendChild(li);
  });
};

const collectValidationIssues = (data) => {
  const issues = [];
  const fullName = (data.get('fullName') || '').trim();
  const email = (data.get('email') || '').trim();
  const skills = (data.get('skills') || '').trim();
  const summary = (data.get('summary') || '').trim();

  if (!fullName) {
    issues.push({ field: 'fullName', message: 'Họ tên không được để trống.' });
  }
  if (!email) {
    issues.push({ field: 'email', message: 'Email không được để trống.' });
  } else if (!emailPattern.test(email)) {
    issues.push({ field: 'email', message: 'Email chưa đúng định dạng.' });
  }
  if (skills.length > 120) {
    issues.push({ field: 'skills', message: 'Kỹ năng nên ngắn gọn dưới 120 ký tự.' });
  }
  if (summary.length > 320) {
    issues.push({ field: 'summary', message: 'Tóm tắt nên dưới 320 ký tự.' });
  }

  return issues;
};

const renderValidation = (issues) => {
  form.querySelectorAll('input, textarea').forEach((field) => field.classList.remove('invalid'));
  if (!validationSummary || !statusBadge) {
    return;
  }

  if (issues.length === 0) {
    validationSummary.innerHTML = '<strong>Kiểm tra dữ liệu</strong><p>Dữ liệu đang hợp lệ cho bước xem trước.</p>';
    statusBadge.textContent = 'Dữ liệu hợp lệ';
    statusBadge.className = 'status-badge status-ok';
    return;
  }

  const issueMarkup = issues.map((issue) => `<li>${issue.message}</li>`).join('');
  validationSummary.innerHTML = `<strong>Kiểm tra dữ liệu</strong><ul>${issueMarkup}</ul>`;
  statusBadge.textContent = `Cần sửa ${issues.length} mục`;
  statusBadge.className = 'status-badge status-error';

  issues.forEach((issue) => {
    const field = form.elements.namedItem(issue.field);
    if (field) {
      field.classList.add('invalid');
    }
  });
};

const refreshPreview = () => {
  const data = new FormData(form);
  const skillsValue = data.get('skills')?.trim() || '';
  preview.name.textContent = data.get('fullName') || 'Họ Tên';
  preview.headline.textContent = data.get('headline') || 'Vị trí mong muốn';
  preview.summary.textContent = data.get('summary') || 'Tóm tắt ngắn gọn về kỹ năng và mục tiêu nghề nghiệp.';
  preview.location.textContent = data.get('location') || 'Địa chỉ';
  preview.email.textContent = data.get('email') || 'Email';
  preview.phone.textContent = data.get('phone') || 'Điện thoại';

  const skillsArray = skillsValue ? skillsValue.split(',').map((skill) => skill.trim()).filter(Boolean) : [];
  updateList(preview.skills, skillsArray.length ? skillsArray : ['Chưa thêm kỹ năng']);

  const experienceLines = parseLines(data.get('experience') || '');
  updateList(preview.experience, experienceLines);

  const educationLines = parseLines(data.get('education') || '');
  updateList(preview.education, educationLines);

  const issues = collectValidationIssues(data);
  renderValidation(issues);
};

form.addEventListener('input', () => {
  refreshPreview();
});

const applyEdgeData = () => {
  form.elements.namedItem('fullName').value = '   ';
  form.elements.namedItem('headline').value = 'Frontend Engineer';
  form.elements.namedItem('summary').value =
    'Mục tiêu: kiểm tra dữ liệu biên khi nhập nội dung dài, ký tự đặc biệt và khoảng trắng dư thừa.\n\nCó kinh nghiệm tạo UI cơ bản.';
  form.elements.namedItem('email').value = 'candidate@@example..com';
  form.elements.namedItem('phone').value = '+84 912 000 999';
  form.elements.namedItem('location').value = 'Ha Noi ###';
  form.elements.namedItem('skills').value = 'JavaScript, React, CSS, Testing, A/B, "UI", ??? ,   ';
  form.elements.namedItem('experience').value =
    'Frontend Dev @ AB-Corp - 2022-2024\n\nQA helper @ Team X - 2021';
  form.elements.namedItem('education').value = 'CNTT @ Dai hoc A - 2015-2019';
  refreshPreview();
};

edgeDataButton?.addEventListener('click', () => {
  applyEdgeData();
});

resetButton?.addEventListener('click', () => {
  form.reset();
  refreshPreview();
});

document.getElementById('generate-btn')?.addEventListener('click', () => {
  refreshPreview();
  form.scrollIntoView({ behavior: 'smooth' });
});

refreshPreview();
