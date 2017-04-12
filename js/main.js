// Main controller for CSC 497 Project
// Kelsey Legault - Jan to April 2017

// Load page
$(document).ready(function () {
    // Disable scroll for instructions and loading-splash
    $("html, body").toggleClass("overflow");

    // Media Array
    var content_list =
        [
        "https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif",
        "https://media.giphy.com/media/l2JJrEx9aRsjNruhi/giphy.gif",
        "https://media.giphy.com/media/3o6Ztrq2mO37Z4SoPm/giphy.gif",
        "https://media.giphy.com/media/tSsptoBbCdfc4/giphy.gif",
        "https://media.giphy.com/media/l0HlRyxGrLxUXq5KE/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/3owyp4lrgQjqeLe0hy/giphy.gif",
        "https://media.giphy.com/media/l0HlRyxGrLxUXq5KE/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/3owyp4lrgQjqeLe0hy/giphy.gif",
        "https://media.giphy.com/media/l0HlRyxGrLxUXq5KE/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/3owyp4lrgQjqeLe0hy/giphy.gif",
        "https://media.giphy.com/media/l0HlRyxGrLxUXq5KE/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://media.giphy.com/media/KbDYCmnzZ2uL6/giphy.gif",
        "https://68.media.tumblr.com/02dd00429079e51a42cd0519c5129541/tumblr_onv3sk8Pr91s60oo7o1_400.gif",
        "https://68.media.tumblr.com/345d54127ac111cfe1b713339ef85eea/tumblr_od0rxjIC8c1rtbl5vo1_500.gif",
        "https://68.media.tumblr.com/afa8e9ad19c9048d175504626e5f21a8/tumblr_o95exrYDKL1s7z2cyo1_500.gif",
        "https://68.media.tumblr.com/b6489b3df6d828321e04617df983aba5/tumblr_o0naolQ2Ns1v4wf0uo1_500.gif",
        "https://68.media.tumblr.com/9a93a011ac908e102eaf157f96e474d9/tumblr_oc5gr4e8861qjbm82o1_500.png",
        "https://68.media.tumblr.com/1787c612b27dd487f9d4686caf3ae0f4/tumblr_okq8aa87Pz1upk172o1_500.jpg",
        "https://68.media.tumblr.com/ae39c27e7ba3d2987a0f179b57a8d7c0/tumblr_omirqvRtgk1rxzliio1_500.gif",
        "https://68.media.tumblr.com/c6f4c98e0e63f18ecb6d6d85ec62955b/tumblr_om5g61wS4S1v5uw1lo1_500.png",
        "https://68.media.tumblr.com/51301316fc4895e64ee55bc607888fc9/tumblr_o94lpnmmvr1survz8o1_500.jpg",
        "https://68.media.tumblr.com/e3ba8aaa126a83d8335a3c2e8f59f6a3/tumblr_on660deUmO1ri84fho1_500.gif",
        "https://68.media.tumblr.com/c0077ae07b9ec9177e0869000fb99e08/tumblr_omdj3wKuU51qbg3s6o1_500.png",
        "https://68.media.tumblr.com/c272e47f39862022fab8ad79855aaada/tumblr_on9w52YcKX1rf8qwro1_500.png",
        "https://68.media.tumblr.com/33a49e7b4baeb132be969368201074a5/tumblr_o3kpx3HLYI1qizjqwo1_500.png",
        "https://68.media.tumblr.com/4057ddf5d8fb147bdab1767ec61c1ded/tumblr_on3opm5JQm1vslxh3o1_500.gif",
        "https://68.media.tumblr.com/54c903680c3a229c608241139518e46c/tumblr_oemqfcz3pB1t1xea8o1_500.gif",
        "https://68.media.tumblr.com/c15f7be210e2e91a4679f83136d73cfc/tumblr_omte5icwRL1s9au7co1_r1_500.png",
        "https://68.media.tumblr.com/bb2308f53b2b3a6fcaddb429e3a8c5ae/tumblr_o5xlkoI7JL1ua8di0o1_500.jpg",
        "https://68.media.tumblr.com/0754cc73a3f47466d526ba9ce256d5e6/tumblr_nnozwyDsvi1rpco88o1_500.gif",
        "https://68.media.tumblr.com/b771516b135b8b5570e75bdbd5093a91/tumblr_okdctcszDy1qztvpwo1_r2_500.gif",
        "https://68.media.tumblr.com/b771516b135b8b5570e75bdbd5093a91/tumblr_okdctcszDy1qztvpwo1_r2_500.gif",
        "https://68.media.tumblr.com/a17c83b8ea2f1a60d6e3cc1434f32a6e/tumblr_olu54eAkZb1uf5tbgo1_500.gif",
        "https://68.media.tumblr.com/1e36b5a5c8cdbfeed92405f48fdadf25/tumblr_ok91k7HEuD1s04h2ho1_500.gif",
        "https://68.media.tumblr.com/7825116377fc1d357790d69f906d9c35/tumblr_olqnlppZ6N1rrj10do1_r2_500.gif",
        "https://68.media.tumblr.com/3e5ce47bf10425af7bdd0ed69b629df2/tumblr_oilnv3ASW81qziy30o1_500.gif",
        "https://68.media.tumblr.com/e70d9f24d9e4235214386946d4e6a017/tumblr_oldkq9RIy71qztdsmo1_500.png",
        "https://68.media.tumblr.com/0b0ae91aa207777062281e45c56809c9/tumblr_ol0xtdJiD11qmif1go1_400.gif",
        "https://68.media.tumblr.com/9b567e9dca1dae0ddc1444f9a47ff2c5/tumblr_oklq9ffbHp1qzzxl7o1_500.jpg",
        "https://68.media.tumblr.com/3ae7c7cd3621fe26dfbc3e2ac6f61d96/tumblr_ol0llxmso91savqpuo1_500.gif",
        "https://68.media.tumblr.com/93546b26a1a7de2e9a1cd63ec2b5a199/tumblr_okeifgVOHP1r9dsoxo1_500.jpg",
        "https://68.media.tumblr.com/02e886334d8c6cebbd56194e0fb3d9af/tumblr_omgwfrNQCT1w6pvy3o1_500.gif",
        "https://68.media.tumblr.com/a5922bd0540b5439f1c23ccdd3d10b8b/tumblr_ok92y2jyBL1tj7xqro1_500.gif",
        "https://68.media.tumblr.com/4ce32eacd53f7a21edc1f2b9525f5d87/tumblr_oko7m9838F1qi1rrlo1_500.jpg",
        "https://68.media.tumblr.com/9601236d251b51403f570a324600cf9a/tumblr_oklnqo6bWu1rfkbx9o1_500.jpg",
        "https://68.media.tumblr.com/24313848c75084c86d24477bc994908d/tumblr_oey6pppG1L1sis9kjo1_500.jpg",
        "https://68.media.tumblr.com/c8b027544dd30988011a1a34efd5eb1d/tumblr_okmlwgJ7IX1vq5lmjo1_500.jpg",
        "https://68.media.tumblr.com/218a0dbd7f2713c61261cb786457e2a9/tumblr_okgsklq1jv1qbvbaao1_500.jpg",
        "https://68.media.tumblr.com/967004c83b80be5f2dc66b9fbcc7a8c0/tumblr_okbsoxRSPc1qbvbaao1_r1_500.jpg",
        "https://68.media.tumblr.com/799010852485ce88f03812e343d47d35/tumblr_okao8dld8D1qbsuvmo1_500.jpg",
        "https://68.media.tumblr.com/dc0498f0fdb3a178db3c240ccbcc9738/tumblr_ojzfdiS2x51vzowfzo1_500.gif",
        "https://68.media.tumblr.com/7a8e9e1962e42e22b8212c76615e70cd/tumblr_okbcvblOLU1rr36wao1_500.jpg",
        "https://68.media.tumblr.com/1fa06b045b84f0e9eb5298e163376c98/tumblr_okc18p44mR1qbxxcpo1_500.jpg",
        "https://68.media.tumblr.com/1738c5582b279341e68b0908fd086a78/tumblr_oka9ghTJCP1qe6g3qo1_500.gif",
        "https://68.media.tumblr.com/48f304dce03c9036e5a891c70d9d42a9/tumblr_okausvldSj1vklsrno1_500.jpg",
        "https://68.media.tumblr.com/22caeb69f307121ccc228bd458dea7fd/tumblr_oka6ztOShj1ujqjcjo1_500.jpg",
        "https://68.media.tumblr.com/80dd12a31850205e06bd2cc7622f6533/tumblr_oka866ICSV1vfu3r9o1_500.png",
        "https://68.media.tumblr.com/b0127994f808e12f6c4e96635d2c9a1b/tumblr_ojhsa210H11tgu3zgo1_500.jpg",
        "https://68.media.tumblr.com/e128eb4d2cb6ea66f4359b8a17215b93/tumblr_okckemGA5f1spacg2o1_500.jpg",
        "https://68.media.tumblr.com/68af6cc38e2ad60ab9e0ff7ecd5f347f/tumblr_okcjx1TQSX1sl87kjo1_500.jpg",
        "https://68.media.tumblr.com/5ac0bf0c8cadcbc7d30a27722a094663/tumblr_okc436Q9wi1tw5hedo1_500.jpg",
        "https://68.media.tumblr.com/272574dfbbd728243ef1faa0cd59014c/tumblr_olbu468jRe1s3dtkro1_500.gif",
        "https://68.media.tumblr.com/44bdc4600492f0e50f72e8ee719ebb69/tumblr_ok9pjc9Yr31qz4vjko1_500.gif",
        "https://68.media.tumblr.com/339b67fff4a1c4f67abbe0188f41f483/tumblr_ohekk8hUSY1txa45so1_500.jpg",
        "https://68.media.tumblr.com/d6abdccca4afe41e3b1c5b19a1a1dd4b/tumblr_ok8y7cHWwW1qztvpwo1_r1_500.gif",
        "https://68.media.tumblr.com/8395a1f568158bf49a489b3f077ce0a6/tumblr_oknzphiK671rx3k87o1_500.jpg",
        "https://i.imgur.com/jIieD5A.png",
        "https://i.redd.it/uzs2j3gp6cqy.jpg",
        "https://i.redditmedia.com/dFt7rjPQbGA00tXoYw6HXAgU38BRmbIIqGIoebgK_tQ.jpg?w=960&s=fcc3149e13574a52a80a48dc517474f0",
        "https://i.redd.it/cfe5ckawendy.jpg",
        "https://i.redd.it/mz73g6ypkrny.jpg",
        "https://i.imgur.com/4btMpad.jpg",
        "https://i.reddituploads.com/39c35cd02094475ea794952c4727b3e1?fit=max&h=1536&w=1536&s=48473962f4651412025f95676786899e",
        "https://i.redd.it/rq4tolgm6e2y.jpg",
        "https://i.redd.it/3m687vb8b7cy.jpg",
        "https://i.redd.it/tlsfz4namhpx.jpg",
        "https://i.redd.it/v58wicmu0oby.jpg",
        "https://i.redd.it/o06c9ebhkxoy.png",
        "http://i.imgur.com/SpJq1W9.jpg",
        "https://i.redd.it/0r5rxq5i8efy.jpg",
        "https://i.reddituploads.com/fb43956e835a44eb84e0adfd31bc7b54?fit=max&h=1536&w=1536&s=620a362cc0209dc39a48aeb88f0be91f",
        "http://i.imgur.com/Rjgk88x.jpg",
        "http://i.imgur.com/1kvP4Xv.jpg",
        "https://www.reddit.com/r/VaporwaveAesthetics/comments/5ultww/saw_it_in_rpics/",
        "https://s-media-cache-ak0.pinimg.com/564x/fa/a4/49/faa4498198e1e4c4a53a38465eb321bb.jpg",
        "http://38.media.tumblr.com/91e9b7a0666d2cea57d9e64d8f399722/tumblr_npfmelezAJ1unxnx9o1_500.gif",
        "https://scontent-ord1-1.cdninstagram.com/t51.2885-15/e35/12555964_1507986516175014_314905360_n.jpg",
        "https://i.redd.it/d72ln4u53loy.gif",
        "https://www.reddit.com/r/VaporwaveArt/comments/61bqet/i_miss_u/",
        "https://i.redd.it/ypwngmmgfz5y.jpg",
        "http://i.imgur.com/2BI0hwu.jpg",
        "https://i.redd.it/kik86qbn2cky.jpg",
        "https://i.redd.it/ekb6zg19uroy.gif",
        "https://66.media.tumblr.com/6a141d69564a29ac7d4071df5d519808/tumblr_o0rbb4TA1k1urr1ryo1_500.gif",
        "http://i.imgur.com/SP7HR2n.jpg",
        "https://i.redd.it/15xmyxmcdxgx.png",
        "https://i.redd.it/evlcjqhfqr0y.jpg",
        "https://i.redd.it/6fuutsqitkny.jpg",
        "https://i.redd.it/gjee2la62moy.jpg",
        "https://i.redd.it/ard4byzs7ymy.gif",
        "http://i.imgur.com/11AZgts.jpg",
        "https://i.redd.it/5jws0cba749y.gif",
        "https://i.reddituploads.com/1be9b9679ab6432884e42bee5ff07584?fit=max&h=1536&w=1536&s=7de8eec4c8881a1843383eacd4092a68",
        "http://i.imgur.com/JTWGShh.jpg",
        "https://i.redd.it/woyqw9t1ls5y.png",
        "https://i.redd.it/1moyqwu78rny.jpg",
        "http://i.imgur.com/FN05eWF.jpg",
        "https://i.redd.it/f3lqwtda1vwx.gif",
        "http://i.imgur.com/WebsMBe.jpg",
        "http://i.imgur.com/HdTimVQ.jpg",
        "https://i.redditmedia.com/HBMBySZnlJsqnZWBfeT-OmU5nFxyvKOnpz3JnKctNc4.jpg?w=800&s=4ef043ae56fac0ccbf9c38ccb443fd42",
        "http://i.imgur.com/k9GU4BY.jpg",
        "http://i.imgur.com/8mAfL0S.jpg",
        "http://i.imgur.com/AVDC1Xy.jpg",
        "http://i.imgur.com/ZBFRuFH.jpg",
        "http://i.imgur.com/QdbByuV.jpg",
        "http://i.imgur.com/KEtf7JJ.jpg",
        "http://i.imgur.com/0JH0qdS.jpg",
        "http://i.imgur.com/xoYMv8B.jpg",
        "http://i.imgur.com/3YFjdao.jpg",
        "http://i.imgur.com/52tPj9G.jpg",
        "http://i.imgur.com/Aq167VY.jpg",
        "http://i.imgur.com/i1VmUnr.jpg",
        "http://i.imgur.com/sTzBViN.jpg",
        "http://i.imgur.com/7S5phDr.jpg",
        "http://i.imgur.com/2dt7rUM.png",
        "http://i.imgur.com/vB1Bo8r.jpg",
        "http://i.imgur.com/NLOlkdh.jpg",
        "http://i.imgur.com/3pUzokH.jpg",
        "https://i.redd.it/gghin7nttjmy.jpg",
        "http://i.imgur.com/f1d2UJJ.jpg",
        "https://i.imgur.com/k7Ib3qe.jpg",
        "http://cdn.cultofmac.com/wp-content/uploads/2012/07/appleII.jpg",
        "http://i.imgur.com/3Th1E6m.png",
        "https://i.imgur.com/IWJi79z.gifv",
        "http://i.imgur.com/pWqtWS2.jpg",
        "http://i.imgur.com/dHn4zoQ.jpg",
        "http://i.imgur.com/YZ9djec.jpg",
        "http://i.imgur.com/lVVhVW4.jpg",
        "https://i.redd.it/iqvvklda2sny.jpg",
        "http://i.imgur.com/uySVm3M.jpg",
        "http://i.imgur.com/qzmimDq.jpg",
        "http://i.imgur.com/KtmGWaX.jpg",
        "https://media.giphy.com/media/3oEdv2unYpXHodsq9W/giphy.gif",
        "https://assets2.ello.co/uploads/asset/attachment/5434170/ello-mdpi-e96a80aa.jpg",
        "https://assets0.ello.co/uploads/asset/attachment/5434124/ello-hdpi-6c53f0e7.jpg",
        "https://assets2.ello.co/uploads/asset/attachment/5434103/ello-hdpi-764aee37.jpg",
        "https://assets1.ello.co/uploads/asset/attachment/5432555/ello-hdpi-28965f49.jpg",
        "https://assets3.ello.co/uploads/asset/attachment/5432015/ello-hdpi-4c2da764.jpg",
        "https://assets1.ello.co/uploads/asset/attachment/5432687/ello-hdpi-a4a3941e.jpg",
        "https://assets0.ello.co/uploads/asset/attachment/5430752/ello-hdpi-2745e3bb.jpg",
        "https://s-media-cache-ak0.pinimg.com/236x/b6/09/50/b60950b6f41269b1976a3046d4b5a627.jpg",
        "http://68.media.tumblr.com/41dfb1736627f6b126d89a7348b6729d/tumblr_n6rnrjDX6R1tbeb6do1_400.jpg",
        "http://68.media.tumblr.com/3edd30ff9037c1063e8abe398fa42dc3/tumblr_n27jhtcfL01rgj5svo1_500.jpg",
        "https://3.bp.blogspot.com/-CJ4FBaXrJWo/V2qix9coz3I/AAAAAAAA9WQ/1EPfm7gBvFkEZQTQs2eTh4ysWIqjT3OEwCLcB/s1600/xIMG_6382%2B640done2.jpg",
        "http://frenchyfancy.com/wp-content/uploads/2016/09/decoration-salon-canape-jaune-moutarde-yellow-FrenchyFancy-3-208x300.jpg",
        "https://2.bp.blogspot.com/-zJgxskDgmmo/WFq8w5Q_6xI/AAAAAAACflQ/kSkLkGcVzaQ8kAVFfmbKcYlb--ZYQXL5QCLcB/s1600/1960s%2Bhair%2Bsalon.jpg",
        "https://4.bp.blogspot.com/-_A9cj4G7fLY/WO0J91uDk0I/AAAAAAAAztw/eE0NffsRvEkJiNSe2o4D9qSkFw1XD_k5gCLcB/s640/Los%2BAngeles%2Bin%2Bthe%2B1940s%2B%25281%2529.jpg",
        "https://3.bp.blogspot.com/-gOeQo4_D8aw/WO0KBLjozZI/AAAAAAAAzuY/96KW-HApriAxqF7N1TV_G-l2LBi7fvHMACLcB/s640/Los%2BAngeles%2Bin%2Bthe%2B1940s%2B%25282%2529.jpg",
        "https://1.bp.blogspot.com/-741FA2PomHc/WO0KGFKwSRI/AAAAAAAAzvo/mjYz3SBOAL8DuTboiYD0Om8dtSKFK2pMACLcB/s640/Los%2BAngeles%2Bin%2Bthe%2B1940s%2B%25284%2529.jpg",
        "https://3.bp.blogspot.com/-Cj3whnuM7eY/WO0KGt70XrI/AAAAAAAAzvs/vNqvK9nKIQQVaW6yEPtJlzDydPGe79OtQCLcB/s640/Los%2BAngeles%2Bin%2Bthe%2B1940s%2B%25285%2529.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/36/70/4c/36704c84cb8c9be3e2d2e11c31c2b05d.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/db/a6/92/dba692690344732efc0dc1848403ff8a.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/3b/e8/62/3be86259f93e3cde71d6b444d9d7ff48.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/d4/b2/31/d4b231b8f1e9ea9e35337c80549500d1.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/a9/0f/b2/a90fb22247e098c901ff6deee78d7714.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/06/a6/00/06a600fced3aff84c730302bd6d6eed2.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/1b/69/54/1b695494a08d7cd1966d2e0d67144a66.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/22/09/69/220969075d6c5b986db42e4bcdf61982.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/f0/00/6e/f0006e239ed8326676a78c737b7e89e4.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/d0/fe/94/d0fe94e25bf59b97243be34c23b070b6.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/dc/dc/98/dcdc9811d5d50fdaf5998c6981fc6d11.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/2d/47/38/2d4738ada9cc8a0cce3eec49df2bc9ee.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/dd/e3/d8/dde3d8cfc49645b6e6dca6a8a2a3d02b.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/d7/7c/41/d77c41556e27da6064bd9a02b57a0e26.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/91/8f/00/918f00afabc1eb17657ac9ed6ec14d4d.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/51/f4/b5/51f4b570379f9a6636988fb05ac3990f.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/a7/78/b2/a778b219527cc7e50b2342f442c6c7a2.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/02/3d/34/023d34c036475ffbf1012ec8e0e15792.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/4d/53/68/4d5368c5a2da6ea4b394ee9b2ac4a369.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/0d/2f/93/0d2f937bd5a0e528e637f300abae2af9.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/62/f6/3b/62f63b63ec074e56210854f890dd4d33.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/72/19/c2/7219c2065a7a029d8de78a19111b84d3.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/82/57/15/825715a8a6801211e3583aa83328f006.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/23/a7/0c/23a70cb2f323d0818b1a7bbb7f75a3af.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/1a/ec/2b/1aec2bd7c58c57a3dff04ce5127e0749.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/3e/12/c5/3e12c505990182fda3d0e3c9269c325d.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/c4/75/2a/c4752a1187a3490ff287572ef187685a.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/b1/92/72/b192721c2e780b3288e0ebfb65884352.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/c1/ac/bf/c1acbf88953939a8f50bdbb44461af0f.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/e7/7c/dd/e77cddb2fc59ea8c913a02ea035e47bf.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/31/85/8a/31858af469797cfc5a1498c87e167a83.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/01/74/9c/01749c2fbc07be88c1ab75b97260772b.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/d6/fd/f8/d6fdf8812c1b02e332488142435d4ade.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/22/54/73/22547327e0c1ada8c851c504d7e94dc6.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/62/28/fb/6228fb9153cbd16be78f11dba03bc9b0.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/0d/c9/74/0dc974afae2c684dbdb081d020cd9872.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/ab/a8/3f/aba83fd4897391394b477e67e72af7fd.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/1b/45/03/1b45036e5c4f722bd7fa15f9c5e176a4.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/c6/a2/4a/c6a24aadd69d34e7044960e7d6e01a57.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/6f/d2/c3/6fd2c3dbd22d00b41e513f090cd8bf95.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/09/45/c0/0945c05e2ba61d466b1dfc3bafd584a4.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/0a/95/62/0a95621a9f08c6da44143e6824bc5d25.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/bf/e7/1a/bfe71a98a7ba54dbfe9ade8990a31aef.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/fc/d4/f0/fcd4f0e0783660f4f7137511b3d1c75f.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/76/a0/26/76a026f89e5ae723e2f96e896878dea2.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/a3/9b/c7/a39bc72d92dd8cc6454b844788361877.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/61/52/5d/61525da9509b8793cd1cdf6798b2e66c.jpg",
        "https://s-media-cache-ak0.pinimg.com/564x/bf/e0/92/bfe09211e32a25a8cb37c5e7e46e5697.jpg",
        "https://media.giphy.com/media/3owyp4lrgQjqeLe0hy/giphy.gif"
        ];

    // Generate array full of random numbers


    var arr = []
    var random_range = 197
    while(arr.length < 25){
        var randomnumber = Math.ceil(Math.random()* random_range)
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    console.log(arr);

    // Grab links from array and insert into windows
    $( ".frame-item .window .content img" ).each(function( index ) {
        console.log( index + ": " + content_list[arr[index]]);
        $(this).attr("src", content_list[arr[index]]);
    });

    // Add closing animation
    $('.closeparent').click(function(){
        var height = $(this).parent().parent().parent().height();
        $(this).parent().parent().parent().height(height).animate({ height: 0 }, 700);
        $(this).parent().parent().parent().addClass("frame-item__hide");
    });

    // Instructions modal, start game
    $(".start").click(function(){

        $("html, body").toggleClass("overflow");
        $(".modal-container__instructions").remove();

        // Timer
        var sec = 30;
        var timer = setInterval(function() {
            if (sec > 9) {
            $('.timer').text("0:" + sec--);
            // When timer runs out
        }
            if (sec <= 9) {
                $('.timer').text("0:0" + sec--);
            }
            if (sec == -1) {
                // Stop timer
                clearInterval(timer);
                $('.timer').text("0:00");
                $('.end-score').text(icu);

                // Show share modal
                $("html, body").toggleClass("overflow");
                $(".modal-container__playagain").fadeIn();
            }
        }, 1000);

        // Score
        var icu = 0;
        $(".like").click(function(){
            icu = icu + 1;
            $('.score').text(icu);
            $(this).addClass("like-animation");
            $(this).find("img").addClass("like-img-animation");
        });
        $(".heart").click(function(){
            icu = icu + 2;
            console.log("click");
            $('.score').text(icu);
            $(this).addClass("love-animation");
            $(this).find("img").addClass("like-img-animation");
        });
    });

    // Play Again
    $(".play-again span").click(function(){
        location.reload();
    });

    // Description modal
    $(".description-button, .close-description").click(function(){
        $("html, body").toggleClass("overflow");
        $(".description").toggleClass("sup");
        if ( $(".share").hasClass( "sup" ) ) {
            $(".share").toggleClass("sup");
            // Handle scroll
            $("html, body").toggleClass("overflow");
        }
    });

    // Share modal
    $(".share-button, .close-share, .share-score").click(function(){
        $("html, body").toggleClass("overflow");
        $(".share").toggleClass("sup");
        if ( $(".description").hasClass( "sup" ) ) {
            $(".description").toggleClass("sup");
            // Handle scroll
            $("html, body").toggleClass("overflow");
        }
    });

    // Fade out loading animations
    $(".loading-splash p").delay(2000).fadeOut(1000);
    $(".loading-splash").delay(2000).fadeOut(2000);


    // Wait for images to load
    // $(window).on("load", function() {
    //     //Calculate height of each window for animation
    //     $( ".frame-item" ).each(function( index ) {
    //         var height = $(this).height();
    //         $(this).height(height);
    //         console.log("dfdfdd");
    //     });
    //
    //     // Fade out loading animations
    //     $(".loading-splash p").fadeOut(700);
    //     $(".loading-splash").fadeOut(1300);
    // });
});
