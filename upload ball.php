<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>双色球</title>
</head>
<style>
    div{
        display:inline-block;
        width: 40px;
        height:40px;
        border-radius:50%;
        background: #979797;
        text-align:center;
        line-height:40px;
        color:#ffffff;
        font-weight:bolder;
        margin:10px;
    }
    .red{
        background:red;
    }

    .blue{
        background:blue;
    }
</style>
<body>
    <?php
    // 创建红球数组和蓝球数组分别存1-33号元素和1-16号元素
        $red = range(1,33);
        $blue = range(1,16);
    // 创建两个数组分别存放被选中的红球元素和被选中的蓝球元素
    // array_rand() 函数从数组中随机选取指定数量的键名
        $redrandom = array_rand($red,6);
        $bluerandom = array_rand($blue,1);
        // 创建一个空数组 $redball，用于存储最终的红球号码
        $redball = [];
        // 遍历 $redrandom 数组中的每个键名 $key
        foreach($redrandom as $key){
            // 根据红球元素的值判断是否需要在左侧补零
            $temp = $red[$key]<10? '0'.$red[$key]:''.$red[$key];
            array_push($redball,$temp);
        }
        // 对 $redball 数组进行随机排序，打乱红球号码的顺序
        shuffle($redball);
        // 根据蓝球元素的值判断是否需要在左侧补零
        $blueball = $blue[$bluerandom]<10? '0'.$blue[$bluerandom]:''.$blue[$bluerandom];

        // 创建6个红球和1个蓝球
        for($i=0;$i<sizeof($redball);$i++){
            echo'<div class="red">'.$redball[$i].'</div>';
        }
        echo '<div class="blue">'.$blueball.'</div>';
    ?>
</body>
</html>
