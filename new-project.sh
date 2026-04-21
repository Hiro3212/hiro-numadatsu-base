#!/bin/bash

PROJECT_NAME=$1

# GitHub CLIのPATHを追加（Windows環境対応）
export PATH="$PATH:/c/Program Files/GitHub CLI"

if [ -z "$PROJECT_NAME" ]; then
  echo "使い方: ./new-project.sh <プロジェクト名>"
  exit 1
fi

echo "========================================"
echo "  新規プロジェクトのセットアップ"
echo "========================================"
echo ""
echo "プロジェクト名：$PROJECT_NAME"
echo ""

# クローン先をclaude_workspace直下に設定（hiro-numadatsu-baseの親ディレクトリ）
PROJECTS_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# テンプレートからGitHubリポジトリを作成してクローン
cd "$PROJECTS_DIR"
gh repo create "$PROJECT_NAME" \
  --template Hiro3212/hiro-numadatsu-base \
  --private \
  --clone

echo ""
echo "✅ セットアップ完了しました。"
echo ""
echo "- ディレクトリ：$PROJECTS_DIR/$PROJECT_NAME"
echo "- GitHubリポジトリ：https://github.com/Hiro3212/$PROJECT_NAME (private)"
echo ""
echo "次のステップ："
echo "1. Antigravity で $PROJECTS_DIR/$PROJECT_NAME を開く"
echo "2. /html-site を実行する"
