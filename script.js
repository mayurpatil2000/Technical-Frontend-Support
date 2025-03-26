function toggleExpand(element) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('expanded'));
    element.classList.add('expanded');
}
