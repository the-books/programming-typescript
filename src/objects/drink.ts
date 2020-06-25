type Nutrition = {
  name: string;
  volume: number;
  unit: 'mg' | 'g' | '㎍';
  ratio?: number;
};

type Drink = {
  productName: string; // 제품명
  productType: string; // 제품유형
  manufacturingCompany: string; // 제조회사
  sellingCompany: string; // 판매원
  volume: number; // 내용량 (ml)
  calorie: number; // 열량 (kcal)
  ingredient: string[]; // 원재료명
  nutritionInfomation: [string, string, string?][]; // 영양정보 [성분, 용량, 비율?]
};

const monster: Drink = {
  productName: '몬스터 에너지',
  productType: '탄산음료',
  manufacturingCompany: '해태에이치티비(주)',
  sellingCompany: '코카-콜라음료(주)',
  volume: 355,
  calorie: 168,
  ingredient: [
    '정제수', '설탕', '포도당', '구연산', '합성향료',
    '몬스터 에너지 코리아 블렌드', '구연산삼나트륨', '안식향산 (보존료)', 'L-카르니틴',
    '이산화탄소', '차추출물 (녹차)', '카페인 (향미증진제)', '포도과피색소', '수크랄로스 (감미료)',
  ],
  nutritionInfomation: [
    ['나트륨', '273mg', '14%'],
    ['탄수화물', '44g', '14%'],
    ['당류', '41g', '41%'],
    ['지방', '0g', '0%'],
    ['트랜스지방', '0g'],
    ['포화지방', '0g', '0%'],
    ['콜레스테롤', '0mg', '0%'],
    ['단백질', '0g', '0%'],
    ['비타민 B₂', '2.6mg', '186%'],
    ['나이아신 (비타민 B₃)', '30mg', '200%'],
    ['비타민 B₆', '3.0mg', '200%'],
    ['비타민 B₁₂', '9㎍', '375%'],
  ],
  // nutritionInfomation: [
  //   { name: '나트륨', volume: 273, unit: '273mg  ', ratio: 14 },
  //   { name: '탄수화물', volume: 44, unit: 'g', ratio: 14 },
  //   { name: '당류', volume: 41, unit: 'g', ratio: 41 },
  //   { name: '지방', volume: 0, unit: 'g', ratio: 0 },
  //   { name: '트랜스지방', volume: 0, unit: 'g'},
  //   { name: '포화지방', volume: 0, unit: 'g', ratio: 0 },
  //   { name: '콜레스테롤', volume: 0, unit: 'mg', ratio: 0 },
  //   { name: '단백질', volume: 0, unit: 'g', ratio: 0 },
  //   { name: '비타민 B₂', volume: 2.6, unit: 'mg', ratio: 186 },
  //   { name: '나이아신 (비타민 B₃)', volume: 30, unit: 'mg', ratio: 200 },
  //   { name: '비타민 B₆', volume: 3.0, unit: 'mg', ratio: 200 },
  //   { name: '비타민 B₁₂', volume: 0, unit: 'g', ratio: 375 },
  // ],
};
