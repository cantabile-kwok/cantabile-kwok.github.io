## 基于BeaqleJS自己改过的MOS test网页
1. 去掉了额外的reference，把其放在测试音频里。
2. 9-scale MOS的背景图
3. 自动发邮件功能
   
### 1. 去掉了额外的reference，把其放在测试音频里。
在beaqle.js中新建了MushraNoRefTest类。

### 2. 9-scale MOS的背景图
在img文件夹下有new_9_mos_scale_with_digit.png和new_9_mos_scale.png

### 3. 自动发邮件
使用的是EmailJS的功能。会把测试结果作为字符串发送到自己的邮箱中。详见naturalness.html或emo_similarity.html中的部分。