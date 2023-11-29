FROM node:18.16.0-alpine

ARG NODE_ENV
ARG PROJECT
ENV NODE_ENV=${NODE_ENV}

# 앱 디렉터리 생성
WORKDIR /usr/src/${PROJECT}

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm config set @ow-develop:registry=https://npm.pkg.github.com/
RUN npm config set //npm.pkg.github.com/:~

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
#RUN npm ci --only=production

# 앱 소스 추가
COPY . .

RUN npm run build:${NODE_ENV}

CMD npm run start:${NODE_ENV}
