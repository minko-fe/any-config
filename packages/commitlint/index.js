/**
 * 提交信息格式
 * // Header
 * fix(auth): message
 * // Body
 * - Done1
 * - Done2
 * // Footer
 *  Closes #456
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 'rule': [0 (no-check) | 1 (warning) | 2 (error), 'always' | 'never', 'value']
  rules: {
    // 提交信息正文前必须有空行
    'body-leading-blank': [2, 'always'],
    // 提交信息正文的最大行长度为 1000
    'body-max-line-length': [2, 'always', 1000],
    // 提交信息页脚前必须有空行
    'footer-leading-blank': [2, 'always'],
    // 提交信息页脚的最大行长度为 500
    'footer-max-line-length': [2, 'always', 500],
    // 提交信息标题的最大长度为 500
    'header-max-length': [2, 'always', 500],
    // 提交信息标题的格式不限制大小写
    'subject-case': [0],
    // 提交信息标题不能为空
    'subject-empty': [2, 'never'],
    // 提交信息类型不能为空
    'type-empty': [2, 'never'],
    // 提交信息类型必须是以下枚举值之一
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复问题
        'update', // 更新内容
        'perf', // 性能优化
        'docs', // 文档更新
        'test', // 添加或修改测试
        'refactor', // 代码重构
        'chore', // 杂项（如构建或工具变更）
        'revert', // 回滚提交
        'wip', // 开发中
      ],
    ],
  },
}
