let text =
  'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.';

let root = document.getElementById('root');
let sample = document.getElementById('sample');
let output = document.getElementById('output');

text = text.split(' ');

for (let i = 0; i < text.length; i++) {
  sample.innerHTML += `<span>${text[i]}</span>`;
}

let sampleSpans = document.querySelectorAll('#sample span');
let outputSpans = document.querySelectorAll('#output span');
let i = 0;

root.addEventListener('click', function () {
  outputSpans[outputSpans.length - 1].setAttribute('contenteditable', true);

  // move cursor to last
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(outputSpans[outputSpans.length - 1]);
  range.collapse(false);
  selection.addRange(range);

  outputSpans[outputSpans.length - 1].focus();
});

outputSpans[outputSpans.length - 1].addEventListener(
  'keypress',
  function (event) {
    keyActions(event);
  }
);

function keyActions(e) {
  if (e.key == ' ') {
    e.preventDefault();
    sampleSpans[i].remove();
    i++;

    let text = outputSpans[outputSpans.length - 1].innerText.trim();
    let span = document.createElement('span');
    span.innerText = text;

    outputSpans[outputSpans.length - 1].innerHTML = '';
    outputSpans[outputSpans.length - 1].insertAdjacentElement(
      'beforebegin',
      span
    );

    outputSpans[outputSpans.length - 1].focus();
  }

  if (e.key === sampleSpans[i].innerText[0]) {
    sampleSpans[i].innerText = sampleSpans[i].innerText.substring(1);
  }
}
