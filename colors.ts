// FIRE HYODO 디자인 시스템 - 컬러 팔레트
// 컨셉: 귀엽고 다정한 효도 (파스텔 베이스 + 딥 그린/브라운 포인트)

export const colors = {
  // 배경
  background: '#FAF7F2', // Warm Off-White/Cream
  cardBackground: '#FFFFFF', // Warm White

  // 포인트 컬러
  peach: '#C97D5D', // Warm Clay / Terracotta - Primary Accent
  mint: '#8A8B5C', // Muted Olive - Secondary Accent

  // 신뢰/안정감 포인트 (소량만 사용)
  forestGreen: '#A5A58D', // Soft Grey-Beige
  warmBrown: '#B08968', // Soft Camel

  // 텍스트
  textPrimary: '#33302C', // Dark Warm Grey / Charcoal
  textSecondary: '#7A756D', // Muted Warm Grey
  textOnDark: '#FAF7F2',

  // 랭킹 메달
  gold: '#F5C452',
  silver: '#C7C7C7',
  bronze: '#D3915A',

  // 상태
  border: '#E8E6E1',
  shadow: 'rgba(51, 48, 44, 0.05)', // 아주 은은한 그림자
} as const;

export type ColorKey = keyof typeof colors;
