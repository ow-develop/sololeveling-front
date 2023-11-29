# SoloLeveling Front

## Introduction

> <나혼자만 레벨업>의 `Polygon` 네트워크 기반 NFT 프로젝트입니다.

Figma: https://www.figma.com/file/5N0bt2kwqZHeCW7KPjbBoH/%5BUX%5D-Solo-Leveling-v.0.1.1?node-id=1938%3A130574&t=Ls8au7WaJt2lhZ1j-0

## Used Specific Library

> Typescript, Next.js, React-Query, NextAuth, styled-components, ethers, web3auth

### * packages

- ow-design-system : https://github.com/ow-develop/ow-design-system
- ow-icons : https://github.com/ow-develop/ow-icons
- ow-fe-config : https://github.com/ow-develop/ow-fe-config

## Initial Setting

`/`
* `.npmrc` : 사설 패키지 접근 설정파일
* `env.local` : 로컬 개발 시 필요한 환경변수
* `env.development` : 개발 서버 배포 시 사용되는 환경변수
* `env.production` : 프로덕션 서버 배포 시 사용되는 환경변수

`/src/lib/i18n/`
* `credentials/` : 구글 스프레드 시트에 접근하기 위한 정보

## Getting Started

```bash
# npm 기반 레포지토리
npm install

# 개발 서버 시작
npm run dev
# Storybook 서버 시작
npm run sb

# 빌드
npm run build:dev # 개발 서버 배포
npm run build:prod # 프로덕션 서버 배포

# 다국어 정보 다운로드
npm run download:i18n

# 내부 패키지 업데이트
npm run update
```
