// تعريف واجهتي MajorCredits و MinorCredits مع خاصية brand للتمييز
interface MajorCredits {
  credits: number;
  brand: "major";  // نوع ثابت يميز النوع
}

interface MinorCredits {
  credits: number;
  brand: "minor";  // نوع ثابت يميز النوع
}

// دالة تجمع رصيد MajorCredits وترجع MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// دالة تجمع رصيد MinorCredits وترجع MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
