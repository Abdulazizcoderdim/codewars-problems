function duplicateCount(text) {
  text = text.toLowerCase(); // katta-kichik harflarni bir xil qilish
  return [...new Set(text)] // takroriy belgilarni olib tashlaymiz
    .filter((ch) => text.split(ch).length - 1 > 1).length; // faqat 2 martadan ko‘p uchraganlarni tanlaymiz // ularning sonini qaytaramiz
}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("ABBA")); // 2
