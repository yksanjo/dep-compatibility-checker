/**
 * Compatibility Checker - Main
 */

const COMPATIBILITY = {
  'react': { node: '>=18.0.0', npm: '>=8.0.0' },
  'vue': { node: '>=16.0.0', npm: '>=8.0.0' },
  'next': { node: '>=18.0.0', npm: '>=9.0.0' },
  'vite': { node: '>=14.0.0', npm: '>=7.0.0' },
  'webpack': { node: '>=10.0.0', npm: '>=6.0.0' },
  'typescript': { node: '>=12.0.0', npm: '>=6.0.0' },
  'prisma': { node: '>=16.0.0', npm: '>=9.0.0' },
  'mongoose': { node: '>=14.0.0', npm: '>=6.0.0' },
  'fastify': { node: '>=14.0.0', npm: '>=7.0.0' },
  'graphql': { node: '>=12.0.0', npm: '>=6.0.0' }
};

export function checkCompatibility(pkg) { return COMPATIBILITY[pkg.toLowerCase()] || null; }
export function getAll() { return COMPATIBILITY; }

console.log('Compatibility Checker v1.0.0');
