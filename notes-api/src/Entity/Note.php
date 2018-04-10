<?php
/**
 * Created by PhpStorm.
 * User: Houziaux mike : jenaye
 * Email : mike@les-tilleuls.coop
 * Date: 07/04/18
 * Time: 16:13
 */


namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * Membre
 * @ApiResource(attributes={"normalization_context"={"groups"={"Note"}},"filters"={"note.search"}})
 * @ORM\Table(name="note")
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note
{

    /**
     * @var int
     * @Groups({"Note"})
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @Groups({"Note"})
     * @ORM\Column(type="datetime")
     */
    public $created_at;

    /**
     * @Groups({"Note"})
     * @ORM\Column(type="text")
     */
    public $content;

    /**
     * @Groups({"Note"})
     * @ORM\Column(type="string")
     */
    public $url;


    /**
     * @Groups({"Note", "Tag"})
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="notes")
     */
    private $tags;

    /**
     * Note constructor.
     */
    public function __construct()
    {
        $this->tags = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * @param mixed $tags
     */
    public function setTags($tags)
    {
        $this->tags = $tags;
    }


    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at)
    {
        $this->created_at = $created_at;
    }

}